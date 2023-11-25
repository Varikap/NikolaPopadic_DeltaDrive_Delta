import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
  @ApiProperty({ example: 'Toyota', description: 'Brand of the vehicle' })
  @IsString()
  brand: string;

  @ApiProperty({ example: 'John', description: 'First name of the driver' })
  @IsString()
  driverFirstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the driver' })
  @IsString()
  driverLastName: string;

  @ApiProperty({
    example: 40.7128,
    description: 'Current latitude position of the vehicle',
  })
  @IsNumber()
  latitude: number;

  @ApiProperty({
    example: -74.006,
    description: 'Current longitude position of the vehicle',
  })
  @IsNumber()
  longitude: number;

  @ApiProperty({ example: 20, description: 'Starting price of the ride' })
  @IsNumber()
  startPrice: number;

  @ApiProperty({ example: 0.5, description: 'Price per km for the ride' })
  @IsNumber()
  pricePerKm: number;
}
