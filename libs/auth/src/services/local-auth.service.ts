import {
  Injectable,
  OnModuleInit,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AbstractUserService } from '../abstract.adapter';
import { USER_SERVICE_PROVIDER } from '../constants';

@Injectable()
export class LocalAuthService implements OnModuleInit {
  private readonly loggoer = new Logger(LocalAuthService.name);
  private userService: AbstractUserService;
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    try {
      this.userService = this.moduleRef.get(USER_SERVICE_PROVIDER, {
        strict: false,
      });
    } catch (error) {
      if (!this.userService) {
        this.loggoer.error('The provider to access the User entity is not found.');
      } else {
        this.loggoer.error(error);
      }
    }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
