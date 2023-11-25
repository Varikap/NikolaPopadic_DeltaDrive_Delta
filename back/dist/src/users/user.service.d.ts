import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(newUser: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOneById(id: number): Promise<User>;
    updateUser(id: string, userDetails: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: string): Promise<import("typeorm").DeleteResult>;
    findOneByUsername(username: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
}
