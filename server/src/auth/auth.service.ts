import {BadRequestException, Injectable} from '@nestjs/common';
import {compare, genSalt, hash} from 'bcryptjs';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {RegisterDto} from './dto/register.dto';
import {User} from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(
      { username },
      { select: ['password', 'username', 'email'] },
    );
    if (user && await compare(password, user.password)) {
      return { ...user, password: undefined };
    }
    return null;
  }

  async login(user: User) {
    return this.generateToken(user);
  }

  async register(registerDto: RegisterDto) {
    // validate params
    if (registerDto.password !== registerDto.passwordConfirm) {
      throw new BadRequestException('Passwords don\'t match');
    }
    const result = await this.usersService.isCredentialsTaken(registerDto);
    if (result.isTaken) {
      throw new BadRequestException(result.msg);
    }
    // hash password
    const salt = await genSalt(10);
    registerDto.password = await hash(registerDto.password, salt);
    const newUser = await this.usersService.create(registerDto);
    return this.generateToken(newUser);
  }

  async generateToken(user: User) {
    const payload = {username: user.username, sub: user.id};
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    }
  }
}

