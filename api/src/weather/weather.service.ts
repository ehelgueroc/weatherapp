import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { WeatherSearchDto } from './dto/search-weather.dto';
import { WeatherForecastDto } from './dto/forecast-weather.dto';

const DEFAULT_REQUEST_LANG = 'en';
const DEFAULT_REQUEST_LIMIT = '5';
const DEFAULT_REQUEST_UNITS = 'metric';

@Injectable()
export class WeatherService {
  async searchWeather(searchDto: WeatherSearchDto) {
    const { locationQuery, limit, lang } = searchDto;

    try {
      const limitParam = limit ?? DEFAULT_REQUEST_LIMIT;
      const langParam = lang ?? DEFAULT_REQUEST_LANG;
      const response = await axios.get(
        `${
          process.env.OPENWEATHER_API_BASE_URL
        }/geo/1.0/direct?q=${locationQuery.trim()}&limit=${limitParam}&lang=${langParam}&appid=${
          process.env.OPENWEATHER_API_KEY
        }`,
      );

      // TODO: Parse data
      return response.data;
    } catch (e) {
      // TODO: Add a custom logger to see better errors
      throw new NotFoundException('Location was not found');
    }
  }

  async getWeatherForecast(forecastDto: WeatherForecastDto) {
    const { latitude, longitude, units, lang } = forecastDto;

    try {
      const languageParam = lang ?? DEFAULT_REQUEST_LANG;
      const unitsParam = units ?? DEFAULT_REQUEST_UNITS;
      const response = await axios.get(
        `${process.env.OPENWEATHER_API_BASE_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${unitsParam}&lang=${languageParam}&appid=${process.env.OPENWEATHER_API_KEY}`,
      );

      // TODO: Parse data
      return response.data;
    } catch (e) {
      // TODO: Add a custom logger to see better errors
      throw new NotFoundException('Location forecast was not found');
    }
  }
}
