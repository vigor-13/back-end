import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { PrismaHealthIndicator } from './indicators';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: PrismaHealthIndicator
  ) {}

  @Get('server')
  @HealthCheck()
  checkHTTP() {
    return this.health.check([
      () => this.http.pingCheck('server', 'http://localhost:3000'),
    ]);
  }

  @Get('db')
  @HealthCheck()
  checkDB() {
    return this.health.check([() => this.db.isHealthy('database')]);
  }
}
