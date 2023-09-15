import { Injectable } from '@nestjs/common';
import postsData from '../../../db/posts.json';

@Injectable()
export class PostsRepository {
  private posts = postsData;

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((post) => post.id === id);
  }
}
