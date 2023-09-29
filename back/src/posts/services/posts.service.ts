import { Injectable, Inject } from '@nestjs/common';
import { PostsRepository } from '../repositories/posts.repository';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  getPosts(limit: number, offset: number) {
    this.logger.info(`Fetching posts with limit: ${limit}, offset: ${offset}`);
    return this.postsRepository.findAll(limit, offset);
  }

  getPostById(id: string) {
    this.logger.info(`Fetching post with id: ${id}`);
    return this.postsRepository.findOne(+id);
  }
}
