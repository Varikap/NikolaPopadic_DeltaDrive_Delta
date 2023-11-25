import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min, Max } from 'class-validator';

export class UpdateRatingDto {
  @ApiProperty({
    example: 5,
    description: 'Updated rating value (1-5)',
    minimum: 1,
    maximum: 5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  value?: number;

  @ApiProperty({
    example: 'Excellent!',
    description: 'Updated comment for the rating',
    required: false,
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
