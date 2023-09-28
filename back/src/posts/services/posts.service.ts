import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  getPosts() {
    return this.postsRepository.findAll();
  }

  getPostById(id: string) {
    return this.postsRepository.findOne(+id);
  }
}
