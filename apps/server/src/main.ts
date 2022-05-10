import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppLogger } from '@app/logger';
import { AppModule } from './app/app.module';
import runSwagger from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    autoFlushLogs: true,
  });

  const config = app.get(ConfigService).get('config');
  const { host, port } = config.http;

  const appLogger = new AppLogger();
  app.useLogger(appLogger);

  runSwagger(app);

  await app.listen(port, () => {
    appLogger.log(`Server is running on http://${host}:${port}`, 'Server');

    if (config.swagger) {
      const { path } = config.swagger;
      appLogger.log(
        `Swagger is running on http://${host}:${port}/${path}`,
        'Swagger'
      );
    } else {
      appLogger.warn(`There is no configuration for swagger.`, 'Swagger');
    }
  });
}
bootstrap();
