export const forecast = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1698624000,
      main: {
        temp: 22.83,
        feels_like: 23.23,
        temp_min: 22.33,
        temp_max: 22.83,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 79,
        temp_kf: 0.5,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 1.52,
        deg: 141,
        gust: 1.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-30 00:00:00',
    },
    {
      dt: 1698634800,
      main: {
        temp: 22.54,
        feels_like: 22.94,
        temp_min: 21.97,
        temp_max: 22.54,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 80,
        temp_kf: 0.57,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 1.38,
        deg: 122,
        gust: 1.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-30 03:00:00',
    },
  ],
  city: {
    id: 6360186,
    name: 'Las Palmas',
    coord: {
      lat: 28.1289,
      lon: -15.4349,
    },
    country: 'ES',
    population: 381847,
    timezone: 0,
    sunrise: 1698563439,
    sunset: 1698603606,
  },
};
