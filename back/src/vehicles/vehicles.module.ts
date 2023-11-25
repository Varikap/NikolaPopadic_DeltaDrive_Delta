import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [VehicleService],
  imports: [TypeOrmModule.forFeature([Vehicle])],
})
export class VehiclesModule {}
