import { Controller, Post, Request, Response } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Request() req, @Response() res) {
    const user = await this.userService.createUser(req.body);
    delete user.id;
    delete user.password;

    return res.send(user);
  }
}
