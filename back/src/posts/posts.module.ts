import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/logger.config';
// import * as winston from 'winston';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';
import { PostsRepository } from './repositories/posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WinstonModule.forRoot({
      // options
    }),
    winstonConfig,
  ],
})
export class PostsModule {}
