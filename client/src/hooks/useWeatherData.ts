import { useState, useEffect, ChangeEvent, useCallback } from 'react';

import { optionType, forecastType } from '../types/index';

const BASE_URL = import.meta.env.VITE_OPENWEATHER_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const useWeatherData = () => {
  const [city, setCity] = useState<optionType | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<[]>([]);
  const [weatherData, setWeatherData] = useState<forecastType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getActualPosition = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setIsLoading(true);
        const { latitude, longitude } = position.coords;
        setSearchTerm('Actual location');
        getForecast({ name: '', country: '', lat: latitude, lon: longitude });
      });
    } else {
      console.log('Geolocation is not available in this browser.');
    }
  }, []);

  const getSearchOptions = async (term: string) => {
    // limit chars to start searching cities
    if (term.length > 2) {
      fetch(
        `${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${API_KEY}`,
      )
        .then(res => res.json())
        .then(data => setSearchOptions(data))
        .catch(e => console.log({ e }));
    } else {
      setSearchOptions([]);
    }
  };

  const handleFormSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const getForecast = (data: optionType) => {
    setIsLoading(true);
    fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&lang=en&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
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
