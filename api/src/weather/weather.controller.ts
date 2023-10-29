import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherSearchDto } from './dto/search-weather.dto';
import { WeatherForecastDto } from './dto/forecast-weather.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search for name or area name a location' })
  @ApiResponse({
    status: 200,
    description: 'Returns on object with ',
    type: WeatherSearchDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Location was not found',
  })
  async searchWeather(@Query() searchDto: WeatherSearchDto) {
    return this.weatherService.searchWeather(searchDto);
  }

  @Get('forecast')
  @ApiOperation({ summary: 'Get forecast of a location' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object with forecast for the whole week',
    type: WeatherForecastDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Location forecast was not found',
  })
  async getWeatherForecast(@Query() forecastDto: WeatherForecastDto) {
    return this.weatherService.getWeatherForecast(forecastDto);
  }
}
