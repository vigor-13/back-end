import { Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'libs/auth/guards';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Request() req, @Response() res) {
    const user = await this.userService.createUser(req.body);
    return res.send(user);
  }
}
