import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/user.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    signIn(email: any, pass: any): Promise<{
        accessToken: string;
        user: {
            id: number;
            username: string;
            email: string;
        };
    }>;
    signUp(userDto: CreateUserDto): Promise<User>;
}
