import { useState, useEffect, ChangeEvent, useCallback } from 'react';

import { optionType, forecastType } from '../types/index';

const API_URL = import.meta.env.VITE_WEATHER_API_URL;

const useWeatherData = () => {
  const [city, setCity] = useState<optionType | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<[]>([]);
  const [weatherData, setWeatherData] = useState<forecastType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getActualPosition = useCallback(() => {
    if ('geolocation' in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        getForecast({ name: '', country: '', lat: latitude, lon: longitude });
      });
    } else {
      setIsLoading(false);
      console.log('Geolocation is not available in this browser.');
    }
  }, []);

  // TODO: when there is an error, should show a message
  // TODO: do not search on each keypress, only when stop
  const getSearchOptions = async (term: string) => {
    if (term.length > 2) {
      fetch(`${API_URL}/weather/search?locationQuery=${term.trim()}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setSearchOptions(data);
        })
        .catch(e => console.log({ e }));
    } else {
      setSearchOptions([]);
    }
  };

  const handleFormSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  // TODO: when there is an error, should show a message
  const getForecast = (data: optionType) => {
    setIsLoading(true);
    fetch(
      `${API_URL}/weather/forecast?latitude=${data.lat}&longitude=${data.lon}`,
    )
      .then(res => res.json())
      .then(data => {
        const forecastData = {
          ...data.city,
          list: data.list,
        };

        setWeatherData(forecastData);
      })
      .catch(e => console.log({ e }))
      .finally(() => setIsLoading(false));
  };

  const handleOptionSelect = (option: optionType) => {
    setCity(option);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchTerm(e.target.value);

    if (value !== '') {
      getSearchOptions(value);
    }
  };

  const handleOnClear = () => {
    setSearchTerm('');
    setSearchOptions([]);
    setWeatherData(null);
  };

  useEffect(() => {
    if (city) {
      setSearchTerm(city.name);
      setSearchOptions([]);
    }
  }, [city]);

  return {
    weatherData,
    searchOptions,
    searchTerm,
    isLoading,
    handleOptionSelect,
    handleFormSubmit,
    handleInputChange,
    getActualPosition,
    handleOnClear,
  };
};

export default useWeatherData;
