import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ username });
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.userRepository.update({ id }, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne(id);
    return this.userRepository.remove(user);
  }
}
