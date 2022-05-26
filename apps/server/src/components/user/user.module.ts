import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { publishProvider } from 'libs/auth';
import { UserController } from './user.controller';
import { DbPrismaModule } from 'libs/db-prisma';

@Module({
  imports: [DbPrismaModule],
  controllers: [UserController],
  providers: [UserService, publishProvider(UserService)],
  exports: [UserService],
})
export class UserModule {}
