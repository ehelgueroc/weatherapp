import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class WeatherSearchDto {
  @IsString()
  @IsNotEmpty()
  locationQuery: string;

  @IsNumber()
  @IsOptional()
  limit?: number;

  @IsString()
  @IsOptional()
  lang?: string;
}
