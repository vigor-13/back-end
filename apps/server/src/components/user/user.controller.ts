import { Controller, Post, Request, Response } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  @Post('register')
  async register(@Request() req, @Response() res) {
    const user = await this.userService.createUser(req.body);
    delete user.id;
    delete user.password;

    const token = this.jwtService.sign(user);

    return res.send({ access_token: token });
  }
}
