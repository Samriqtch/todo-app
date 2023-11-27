// users.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './users.service'; // Assurez-vous que le nom est correct
import User from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Post()
  createUser(@Body() user: User) {
    console.log(user);
    return this.userService.create(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: User) {
    return this.userService.update(Number(id), updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.remove(Number(id));
  }
}
