import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../configs/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbPrismaModule } from '@app/db-prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DbPrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
