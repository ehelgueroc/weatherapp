export type optionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type forecastItem = {
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      main: string;
      icon: string;
      description: string;
    },
  ];
  wind: {
    speed: number;
    gust: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  pop: number;
  visibility: number;
};

export type forecastType = {
  name: string;
  country: string;
  list: forecastItem[];
  sunrise: number;
  sunset: number;
};
