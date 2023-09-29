import { Injectable } from '@nestjs/common';
import postsData from '../../../db/posts.json';

@Injectable()
export class PostsRepository {
  private posts = postsData;

  findAll(limit: number, offset: number) {
    return this.posts.slice(offset, offset + limit);
  }

  findOne(id: number) {
    const post = this.posts.find((post) => post.id === id);
    return post;
  }
}
