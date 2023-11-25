import { Repository } from 'typeorm';
import { DriverService } from '../drivers/driver.service';
import { UserService } from '../users/user.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';
export declare class RatingService {
    private readonly ratingRepository;
    private readonly userService;
    private readonly driverService;
    constructor(ratingRepository: Repository<Rating>, userService: UserService, driverService: DriverService);
    findOneById(id: number): Promise<Rating>;
    findAllForUser(email: string): Promise<Rating[]>;
    rate(email: string, ratingData: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    create(ratingData: CreateRatingDto): Promise<Rating>;
    update(id: number, updateData: UpdateRatingDto): Promise<Rating>;
    delete(id: number): Promise<void>;
}
