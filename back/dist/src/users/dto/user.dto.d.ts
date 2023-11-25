import { RatingDto } from '../../ratings/dto/rating.dto';
export declare class UserDto {
    id: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    ratings: RatingDto[];
}
