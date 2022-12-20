import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.NODE_PORT ? process.env.NODE_PORT : 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
