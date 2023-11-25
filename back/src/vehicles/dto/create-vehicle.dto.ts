import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsBoolean,
  IsLatitude,
  IsLongitude,
  IsPositive,
} from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({ example: 'Toyota', description: 'Brand of the vehicle' })
  @IsString()
  brand: string;

  @ApiProperty({ example: 45.2164, description: 'Latitude of the vehicle' })
  @IsNumber()
  @IsLatitude()
  latitude: number;

  @ApiProperty({ example: 19.8483, description: 'Longitude of the vehicle' })
  @IsNumber()
  @IsLongitude()
  longitude: number;

  @ApiProperty({ example: 20.0, description: 'Starting price of the ride' })
  @IsNumber()
  @IsPositive()
  startPrice: number;

  @ApiProperty({ example: 1.5, description: 'Price per kilometer' })
  @IsNumber()
  @IsPositive()
  pricePerKm: number;

  @ApiProperty({
    example: true,
    description: 'Availability status of the vehicle',
  })
  @IsBoolean()
  isAvailable: boolean;
}
