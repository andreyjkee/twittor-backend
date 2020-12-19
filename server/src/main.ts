import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {TimeoutInterceptor} from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // delete fields that not included in DTO
  }));
  const options = new DocumentBuilder()
    .setTitle('Twittor API')
    .setDescription('Interactive Docs for Twittor API.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new TimeoutInterceptor());
  await app.listen(8000);
}
bootstrap();
