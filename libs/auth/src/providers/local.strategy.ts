import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-local';
import { LocalAuthService } from '../services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: LocalAuthService) {
    super({
      usernameField: 'key',
      passwordField: 'password',
      passReqToCallback: true,
    });
  }

  async validate(req: Request, key: string, password: string): Promise<any> {
    const user = this.authService.validateUser(key, password);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
