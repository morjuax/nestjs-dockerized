import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async add(@Body() user: User): Promise<User> {
    return await this.userService.add(user);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
