import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/service/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createUser(@Body() createUser: UsersDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(createUser.password, saltOrRounds);
    createUser.password = hashedPassword;
    return this.userService.createUser(createUser);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
