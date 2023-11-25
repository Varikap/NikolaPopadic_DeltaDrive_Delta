import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';
import { Ride } from './entities/ride.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversModule } from '../drivers/drivers.module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [RideService],
  controllers: [RideController],
  imports: [
    TypeOrmModule.forFeature([Ride]),
    UsersModule,
    VehiclesModule,
    DriversModule,
  ],
})
export class RidesModule {}
