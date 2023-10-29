import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class WeatherForecastDto {
  @IsNotEmpty()
  @IsString()
  latitude: string;

  @IsNotEmpty()
  @IsString()
  longitude: string;

  @IsString()
  @IsOptional()
  units?: 'metric' | 'standard' | 'imperial';

  @IsString()
  @IsOptional()
  lang?: string;
}
