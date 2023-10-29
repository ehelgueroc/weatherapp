import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number(),
        OPENWEATHER_API_KEY: Joi.string().required(),
        OPENWEATHER_API_BASE_URL: Joi.string().required(),
      }),
    }),
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
