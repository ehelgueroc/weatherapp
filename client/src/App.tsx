import WeatherForecast from './components/WeatherForecast';
import SearchBar from './components/SearchBar';
import useWeatherData from './hooks/useWeatherData';
import { useEffect } from 'react';

const App = () => {
  const {
    weatherData,
    searchOptions,
    searchTerm,
    isLoading,
    handleOptionSelect,
    handleInputChange,
    handleOnClear,
    getActualPosition,
  } = useWeatherData();

  useEffect(() => {
    getActualPosition();
  }, [getActualPosition]);

  return (
    <main className="flex justify-center bg-gradient-to-br from-sky-900 via-cyan-800 to-cyan-800 min-h-[100vh] w-full">
      <div className="w-full md:max-w-[1024px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto backdrop-blur-ls rounded drop-shadow-lg">
        <SearchBar
          term={searchTerm}
          options={searchOptions}
          onInputChange={handleInputChange}
          onOptionSelect={handleOptionSelect}
          onClear={handleOnClear}
          placeholder="Add city"
        />
        {isLoading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="loader ease-linear rounded-full border-t-4 border-gray-200 h-12 w-12 animate-spin"></div>
          </div>
        ) : (
          weatherData && <WeatherForecast data={weatherData} />
        )}
      </div>
    </main>
  );
};

export default App;
