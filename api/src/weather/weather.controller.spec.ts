import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { WeatherSearchDto } from './dto/search-weather.dto';
import { WeatherForecastDto } from './dto/forecast-weather.dto';

describe('WeatherController', () => {
  let weatherController: WeatherController;
  let weatherService: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService],
    }).compile();

    weatherController = module.get<WeatherController>(WeatherController);
    weatherService = module.get<WeatherService>(WeatherService);
  });

  describe('searchWeather', () => {
    it('should call service with correct params and return search results', async () => {
      const searchDto: WeatherSearchDto = { locationQuery: 'Las Palmas' };

      const expectedResults = {};

      const searchWeatherSpy = jest
        .spyOn(weatherService, 'searchWeather')
        .mockResolvedValue(expectedResults);

      const result = await weatherController.searchWeather(searchDto);

      expect(result).toBe(expectedResults);
      expect(searchWeatherSpy).toHaveBeenCalledWith(searchDto);
    });
  });

  describe('getWeatherForecast', () => {
    it('should call service with correct params and return weather forecast', async () => {
      const forecastDto: WeatherForecastDto = {
        latitude: '-20.1234',
        longitude: '12.0312',
      };
      const expectedForecast = {};

      const getWeatherForecastSpy = jest
        .spyOn(weatherService, 'getWeatherForecast')
        .mockResolvedValue(expectedForecast);

      const result = await weatherController.getWeatherForecast(forecastDto);

      expect(result).toBe(expectedForecast);
      expect(getWeatherForecastSpy).toHaveBeenCalledWith(forecastDto);
    });
  });
});
