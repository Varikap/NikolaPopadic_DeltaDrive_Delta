import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RatingDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the rating' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 5, description: 'Rating value (1 to 5)' })
  @IsNumber()
  value: number;

  @ApiProperty({
    example: 'Great service!',
    description: 'Comment for the rating',
  })
  @IsString()
  comment: string;

  // TODO: Add user and driver information...
}
