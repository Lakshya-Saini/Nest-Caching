import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

@Controller('/user')
@UseInterceptors(CacheInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  @CacheKey('users')
  async getAllUsers() {
    const data = await this.userService.getUsers();
    return {
      success: true,
      status: 200,
      data,
    };
  }
}
