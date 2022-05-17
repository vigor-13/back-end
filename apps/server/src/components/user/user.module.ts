import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { publishProvider } from 'libs/auth';

@Module({
  imports: [],
  providers: [UserService, publishProvider(UserService)],
  exports: [UserService],
})
export class UserModule {}
