import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controllers';
import { JwtStrategy, LocalStrategy } from './providers';
import { LocalAuthService } from './services';

@Global()
@Module({})
export class AuthModule {
  static forRoot(): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        PassportModule,
        JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '1h' } }),
      ],
      controllers: [AuthController],
      providers: [LocalAuthService, LocalStrategy, JwtStrategy],
      exports: [LocalAuthService, JwtModule],
    };
  }
}
