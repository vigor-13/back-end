import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import runSwagger from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  runSwagger(app);

  await app.listen(3000);
}
bootstrap();
