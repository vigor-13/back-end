import { Module } from '@nestjs/common';
import { DbPrismaService } from './db-prisma.service';

@Module({
  providers: [DbPrismaService],
  exports: [DbPrismaService],
})
export class DbPrismaModule {}
