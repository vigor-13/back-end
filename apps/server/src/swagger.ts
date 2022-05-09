import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const runSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Back-end example')
    .setDescription('The Back-end API description')
    .setVersion('0.1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
};

export default runSwagger;
