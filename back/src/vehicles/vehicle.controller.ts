import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FindClosestVehiclesDto } from './dto/find-closest-vehicles.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('vehicles')
@ApiBearerAuth()
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('closest')
  findClosestVehicles(@Body() body: FindClosestVehiclesDto) {
    const { latitude, longitude } = body;
    return this.vehicleService.findClosestVehicles(latitude, longitude);
  }
}
