import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRideDto } from './dto/create-ride.dto';
import { RideService } from './ride.service';

@Controller('ride')
@Controller('ride')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('ride')
@ApiBearerAuth()
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Post('order-ride')
  orderRide(@Request() req, @Body() body: CreateRideDto) {
    return this.rideService.orderRide(req.user.email, body);
  }

  @Post('complete-ride/:id')
  markRideAsCompleted(@Param('id') id: number) {
    return this.rideService.markRideAsCompleted(id);
  }

  @Get('get-completed-rides')
  getCompletedRides(@Request() req) {
    return this.rideService.findAllCompleted(req.user.email);
  }
}
