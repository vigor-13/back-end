import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthService } from './services';
import { LocalAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: LocalAuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return;
  }
}
