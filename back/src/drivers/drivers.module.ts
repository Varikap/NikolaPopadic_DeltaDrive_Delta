import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { Driver } from './entities/driver.entity';

@Module({
  controllers: [DriverController],
  providers: [DriverService],
  exports: [DriverService],
  imports: [TypeOrmModule.forFeature([Driver]), VehiclesModule],
})
export class DriversModule {}
