import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsLatitude,
  IsLongitude,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class UpdateRideDto {
  @ApiProperty({
    example: 45.2164,
    description: 'Updated latitude of the starting location',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsLatitude()
  startLocationLatitude?: number;

  @ApiProperty({
    example: 19.8483,
    description: 'Updated longitude of the starting location',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsLongitude()
  startLocationLongitude?: number;

  @ApiProperty({
    example: 45.2234,
    description: 'Updated latitude of the ending location',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsLatitude()
  endLocationLatitude?: number;

  @ApiProperty({
    example: 19.8308,
    description: 'Updated longitude of the ending location',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsLongitude()
  endLocationLongitude?: number;

  @ApiProperty({
    example: 30.0,
    description: 'Updated total price of the ride',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  totalPrice?: number;
}
