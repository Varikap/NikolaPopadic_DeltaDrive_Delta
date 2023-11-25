import { Driver } from '../../drivers/entities/driver.entity';
import { User } from '../../users/entities/user.entity';
export declare class Rating {
    id: number;
    value: number;
    comment: string;
    user: User;
    driver: Driver;
}
