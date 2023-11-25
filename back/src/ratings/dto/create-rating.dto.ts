import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty({
    example: 5,
    description: 'Rating value (1-5)',
    minimum: 1,
    maximum: 5,
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  value: number;

  @ApiProperty({
    example: 'Great service!',
    description: 'Optional comment for the rating',
    required: false,
  })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty({
    example: 1,
    description: 'Driver ID',
    required: true,
  })
  @IsNumber()
  driverId: number;
}
