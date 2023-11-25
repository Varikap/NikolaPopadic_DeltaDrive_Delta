import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SigninUserDto } from '../users/dto/signin-user.dto';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signIn(signInDto: SigninUserDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            username: string;
            email: string;
        };
    }>;
    signUp(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
    getUser(req: any): Promise<import("../users/entities/user.entity").User>;
}
