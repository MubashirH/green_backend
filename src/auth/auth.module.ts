import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth/auth.service';
import { LocalStrategy } from './local.auth';
import { UsersService } from 'src/users/service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/users';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants/jwt.constants';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' },
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [LocalStrategy, AuthService, UsersService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
