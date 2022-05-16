import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [UserService],
  exports: [UserService],
})
export class UserModule {}
