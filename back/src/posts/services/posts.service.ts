import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  getPosts() {
    return this.postsRepository.findAll();
  }

  getPostById(id: number) {
    return this.postsRepository.findOne(id);
  }
}
