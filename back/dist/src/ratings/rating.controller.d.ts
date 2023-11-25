import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';
export declare class RatingController {
    private raitingService;
    constructor(raitingService: RatingService);
    getRatings(req: any): Promise<import("./entities/rating.entity").Rating[]>;
    rate(req: any, body: CreateRatingDto): Promise<import("./entities/rating.entity").Rating>;
}
