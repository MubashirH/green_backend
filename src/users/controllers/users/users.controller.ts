import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/service/users/users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() createUser: UsersDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(createUser.password, saltOrRounds);
    createUser.password = hashedPassword;
    return this.userService.createUser(createUser);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
