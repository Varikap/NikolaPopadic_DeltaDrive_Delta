import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsNumber,
  IsLatitude,
  IsLongitude,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class UpdateVehicleDto {
  @ApiProperty({
    example: 'Toyota',
    description: 'Updated brand of the vehicle',
    required: false,
  })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiProperty({
    example: 45.2164,
    description: 'Updated latitude of the vehicle',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsLatitude()
  latitude?: number;

  @ApiProperty({
    example: 19.8483,
    description: 'Updated longitude of the vehicle',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsLongitude()
  longitude?: number;

  @ApiProperty({
    example: 25.0,
    description: 'Updated starting price of the ride',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  startPrice?: number;

  @ApiProperty({
    example: 1.8,
    description: 'Updated price per kilometer',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  pricePerKm?: number;

  @ApiProperty({
    example: false,
    description: 'Updated availability status of the vehicle',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}
