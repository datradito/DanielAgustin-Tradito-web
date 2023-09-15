import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  await app.listen(3000);
}
bootstrap();
