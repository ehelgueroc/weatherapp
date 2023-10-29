import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class WeatherSearchDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The city or area to be search',
    required: true,
  })
  locationQuery: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Results limit',
    required: false,
    default: '5',
  })
  limit?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Language to show data returned',
    required: false,
    default: 'en',
  })
  lang?: string;
}
