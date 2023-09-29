import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from '../services/posts.service';
import { PostsRepository } from '../repositories/posts.repository';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        PostsService,
        PostsRepository,
        {
          provide: WINSTON_MODULE_PROVIDER,
          useValue: Logger.prototype,
        },
      ],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return posts with pagination', () => {
    const result = [{ userId: 1, id: 1, title: 'Test', body: 'Test body' }];
    const limit = 10;
    const offset = 0;
    jest.spyOn(service, 'getPosts').mockImplementation(() => result);

    expect(controller.getPosts(limit, offset)).toBe(result);
  });
});
