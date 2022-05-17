import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controllers';
import { LocalStrategy } from './providers';
import { LocalAuthService } from './services';

@Module({})
export class AuthModule {
  static register(): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        PassportModule,
        JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '1h' } }),
      ],
      controllers: [AuthController],
      providers: [LocalAuthService, LocalStrategy],
      exports: [LocalAuthService],
    };
  }
}
