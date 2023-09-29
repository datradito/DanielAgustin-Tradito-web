import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3001;

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
