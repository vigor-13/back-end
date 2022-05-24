import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getMode(): string {
    const { mode } = this.configService.get<any>('config');
    console.log(mode);
    return mode;
  }
}
