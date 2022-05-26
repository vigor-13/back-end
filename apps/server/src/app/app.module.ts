import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../configs/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbPrismaModule } from '@app/db-prisma';
import { HealthModule } from '@app/health';
import { AuthModule } from '@app/auth';
import { UserModule } from '../components/user';
import { DummyModule } from '../components/dummy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    AuthModule.forRoot(),
    DbPrismaModule,
    HealthModule,
    DummyModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
