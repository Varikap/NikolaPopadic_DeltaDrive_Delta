import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversModule } from '../drivers/drivers.module';
import { Ride } from '../rides/entities/ride.entity';
import { UsersModule } from '../users/users.module';
import { Rating } from './entities/rating.entity';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';

@Module({
  controllers: [RatingController],
  providers: [RatingService],
  imports: [
    TypeOrmModule.forFeature([Rating, Ride]),
    UsersModule,
    DriversModule,
  ],
})
export class RatingsModule {}
