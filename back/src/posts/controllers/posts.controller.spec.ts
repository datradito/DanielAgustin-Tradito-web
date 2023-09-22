import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from '../services/posts.service';
import { PostsRepository } from '../repositories/posts.repository';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService, PostsRepository],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return posts', () => {
    const result = [{ userId: 1, id: 1, title: 'Test', body: 'Test body' }];
    jest.spyOn(service, 'getPosts').mockImplementation(() => result);

    expect(controller.getPosts()).toBe(result);
  });
});
