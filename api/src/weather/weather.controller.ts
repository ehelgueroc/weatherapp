import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherSearchDto } from './dto/search-weather.dto';
import { WeatherForecastDto } from './dto/forecast-weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('search')
  async searchWeather(@Query() searchDto: WeatherSearchDto) {
    return this.weatherService.searchWeather(searchDto);
  }

  @Get('forecast')
  async getWeatherForecast(@Query() forecastDto: WeatherForecastDto) {
    return this.weatherService.getWeatherForecast(forecastDto);
  }
}
