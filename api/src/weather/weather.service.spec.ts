import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';
import { WeatherSearchDto } from './dto/search-weather.dto';
import { WeatherForecastDto } from './dto/forecast-weather.dto';
import { NotFoundException } from '@nestjs/common';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { locations } from '../../test/fixtures/locations';
import { forecast } from '../../test/fixtures/forecast';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let axiosMock: MockAdapter;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherService],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.reset();
  });

  afterAll(() => {
    axiosMock.restore();
  });

  it('should be defined', () => {
    expect(weatherService).toBeDefined();
  });

  describe('searchWeather', () => {
    it('should return weather data for a valid location', async () => {
      const mockSearchDto: WeatherSearchDto = {
        locationQuery: 'New York',
        limit: '5',
        lang: 'en',
      };

      axiosMock.onGet(/geo\/1.0\/direct/).reply(200, { data: locations });

      const weatherData = await weatherService.searchWeather(mockSearchDto);
      expect(weatherData).toBeDefined();
      expect(weatherData).toEqual({ data: locations });
    });

    it('should throw NotFoundException for an invalid location', async () => {
      const mockSearchDto: WeatherSearchDto = {
        locationQuery: 'NonExistentLocation',
        limit: '5',
        lang: 'en',
      };

      axiosMock.onGet(/geo\/1.0\/direct/).reply(404);

      try {
        await weatherService.searchWeather(mockSearchDto);
        fail('Expected NotFoundException, but no exception was thrown');
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Location was not found');
      }
    });
  });

  describe('getWeatherForecast', () => {
    it('should return weather forecast data for a valid location', async () => {
      const mockForecastDto: WeatherForecastDto = {
        latitude: '20.3512',
        longitude: '-74.0060',
        units: 'metric',
        lang: 'en',
      };

      axiosMock.onGet(/data\/2.5\/forecast/).reply(200, { data: forecast });

      const forecastData =
        await weatherService.getWeatherForecast(mockForecastDto);
      expect(forecastData).toBeDefined();
      expect(forecastData).toEqual({ data: forecast });
    });

    it('should throw NotFoundException for an invalid location', async () => {
      const mockForecastDto: WeatherForecastDto = {
        latitude: 'foo',
        longitude: 'bar',
        units: 'metric',
        lang: 'en',
      };

      // Mock a failed Axios request
      axiosMock.onGet(/data\/2.5\/forecast/).reply(404);

      try {
        await weatherService.getWeatherForecast(mockForecastDto);
        fail('Expected NotFoundException, but no exception was thrown');
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Location forecast was not found');
      }
    });
  });
});
