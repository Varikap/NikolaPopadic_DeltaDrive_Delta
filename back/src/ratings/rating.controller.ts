import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('rating')
@ApiBearerAuth()
export class RatingController {
  constructor(private raitingService: RatingService) {}

  @Get('get-ratings')
  getRatings(@Request() req) {
    return this.raitingService.findAllForUser(req.user.email);
  }

  @Post('rate')
  rate(@Request() req, @Body() body: CreateRatingDto) {
    return this.raitingService.rate(req.user.email, body);
  }
}
