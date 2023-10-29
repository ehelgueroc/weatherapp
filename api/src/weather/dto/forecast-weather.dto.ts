import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class WeatherForecastDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The city or area latitude',
    required: true,
  })
  latitude: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The city or area longitude',
    required: true,
  })
  longitude: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The unit the temperature is measured',
    default: 'metric',
    required: false,
  })
  units?: 'metric' | 'standard' | 'imperial';

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Language to show data returned',
    default: 'en',
    required: false,
  })
  lang?: string;
}
