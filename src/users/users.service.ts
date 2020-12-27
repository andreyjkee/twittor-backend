import {Injectable, NotFoundException} from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {FindConditions, FindOneOptions, Repository} from 'typeorm';
import {User} from './entities/user.entity';
import {RegisterDto} from '../auth/dto/register.dto';
import {UserProfile} from './entities/user-profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserProfile) private readonly profileRepository: Repository<UserProfile>
  ) {}

  async findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async findOne(
    conditions: FindConditions<User>,
    options?: FindOneOptions<User>,
    ): Promise<User | undefined> {
    return this.userRepository.findOne(conditions, options);
  }

  async create(registerDto: RegisterDto): Promise<User> {
    const {
      username,
      password,
      email,
      ...profile
    } = registerDto;

    const newUser = this.userRepository.create({ username, email, password });
    newUser.profile = this.profileRepository.create(profile);
    await this.profileRepository.insert(newUser.profile);
    await this.userRepository.insert(newUser);
    delete newUser.password;
    return newUser;
  }

  async isCredentialsTaken (registerDto: RegisterDto): Promise<{ isTaken: boolean, msg?: string }> {
    const { username, email } = registerDto;
    const [dbUsername, dbEmail] = await Promise.all([
      this.findOne({ username }),
      this.findOne({ email }),
    ]);
    if (dbUsername) return {
      isTaken: true,
      msg: `Username ${username} is not available, choose another`
    };
    if (dbEmail) return {
      isTaken: true,
      msg: `Email ${email} is already registered, choose another or login`
    };
    return { isTaken: false };
  }

  findAll() {
    return this.userRepository.find();
  }

  async updateProfile(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepository.update({ id }, updateProfileDto);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne(id);
    return this.userRepository.remove(user);
  }
}
