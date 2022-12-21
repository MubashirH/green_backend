import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/users';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  createUser(userDetails: CreateUserParams) {
    //this will create a new product and is not async
    const newUser = this.usersRepository.create({
      ...userDetails,
    });

    //this will save the new product into the database and its async so it returns a promise
    return this.usersRepository.save(newUser);
  }

  getAllUsers() {
    return this.usersRepository.find();
  }

  async getUser(query: object): Promise<Users> {
    return this.usersRepository.findOne({ where: query });
  }

  deleteUser(id: number) {
    return this.usersRepository.delete({ id });
  }
}