import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverService } from '../drivers/driver.service';
import { Ride } from '../rides/entities/ride.entity';
import { UserService } from '../users/user.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
    @InjectRepository(Ride)
    private readonly rideRepository: Repository<Ride>,
    private readonly userService: UserService,
    private readonly driverService: DriverService,
  ) {}

  async findOneById(id: number) {
    const rating = await this.ratingRepository.findOneBy({ id });
    if (!rating) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }
    return rating;
  }

  async findAllForUser(email: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return this.ratingRepository.find({
      where: { user },
      relations: ['driver', 'ride'],
    });
  }

  async rate(email: string, ratingData: CreateRatingDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    const driver = await this.driverService.findOneById(ratingData.driverId);
    if (!driver) {
      throw new NotFoundException(
        `Driver with ID ${ratingData.driverId} not found`,
      );
    }

    const ride = await this.rideRepository.findOneBy({ id: ratingData.rideId });
    if (!ride) {
      throw new NotFoundException(
        `Ride with ID ${ratingData.rideId} not found`,
      );
    }

    const rating = new Rating();
    rating.value = ratingData.value;
    rating.comment = ratingData.comment;
    rating.user = user;
    rating.driver = driver;
    rating.ride = ride;
    return this.ratingRepository.save(rating);
  }

  async findAll() {
    return this.ratingRepository.find();
  }

  async create(ratingData: CreateRatingDto) {
    const rating = this.ratingRepository.create(ratingData);
    return this.ratingRepository.save(rating);
  }

  async update(id: number, updateData: UpdateRatingDto) {
    await this.findOneById(id);
    await this.ratingRepository.update(id, updateData);
    return this.findOneById(id);
  }

  async delete(id: number) {
    await this.findOneById(id);
    await this.ratingRepository.delete(id);
  }
}
