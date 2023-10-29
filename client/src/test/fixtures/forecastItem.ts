import { forecastItem } from '../../types';

const forecastItem: forecastItem = {
  dt: 1234,
  main: {
    feels_like: 1,
    humidity: 2,
    pressure: 3,
    temp: 25,
    temp_max: 5,
    temp_min: 6,
  },
  weather: [
    {
      main: 'sunny',
      icon: 'cloud',
      description: 'cloud sunny',
    },
  ],
  wind: {
    speed: 10,
    gust: 11,
    deg: 25,
  },
  clouds: {
    all: 13,
  },
  pop: 14,
  visibility: 15,
};

export { forecastItem };
