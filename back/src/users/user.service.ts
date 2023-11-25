import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(newUser: CreateUserDto) {
    newUser.password = await bcrypt.hash(
      newUser.password,
      parseInt(process.env.SALT),
    );
    newUser.birthDate = new Date(newUser.birthDate);
    console.log(newUser);
    const user = this.userRepository.create(newUser);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOneById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async updateUser(id: string, userDetails: UpdateUserDto) {
    return this.userRepository.update(id, userDetails);
  }

  async deleteUser(id: string) {
    return this.userRepository.delete(id);
  }

  async findOneByUsername(username: string) {
    return await this.userRepository.findOneBy({ username });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
}
