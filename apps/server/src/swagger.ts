import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const runSwagger = (app: INestApplication) => {
  const appConfig = app.get(ConfigService).get('swagger');
  if (!appConfig) return;

  const { title, description, version, path } = appConfig;

  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(path, app, document);
};

export default runSwagger;
