import { Injectable, NotAcceptableException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../../users/service/users/users.service';
import { UsersDto } from 'src/users/dtos/users.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ userName: username });
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      delete user.password;
      return user;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.userName, sub: user._id };
    return {
      username: user.userName,
      role: user.role,
      access_token: this.jwtService.sign(payload),
    };
  }
}
