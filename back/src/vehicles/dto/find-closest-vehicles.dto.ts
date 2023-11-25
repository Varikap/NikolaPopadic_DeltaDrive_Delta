import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindClosestVehiclesDto {
  @ApiProperty({
    example: 45.2671,
    description: 'Latitude',
  })
  @IsNumber()
  readonly latitude: number;

  @ApiProperty({
    example: 19.8335,
    description: 'Longitude',
  })
  @IsNumber()
  readonly longitude: number;
}
