import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    const post = this.postsService.getPostById(String(id));

    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }
}
