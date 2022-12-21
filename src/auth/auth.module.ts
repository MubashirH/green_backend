import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth/auth.service';
import { LocalStrategy } from './local.auth';
import { UsersService } from 'src/users/service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/users';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [LocalStrategy, AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
