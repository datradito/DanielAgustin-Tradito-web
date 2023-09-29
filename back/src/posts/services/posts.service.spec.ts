import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { PostsRepository } from '../repositories/posts.repository';

describe('PostsService', () => {
  let service: PostsService;
  let repository: PostsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, PostsRepository],
    }).compile();

    service = module.get<PostsService>(PostsService);
    repository = module.get<PostsRepository>(PostsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return paginated posts', () => {
    const result = [{ userId: 1, id: 1, title: 'Test', body: 'Test body' }];
    const limit = 10;
    const offset = 0;
    jest.spyOn(repository, 'findAll').mockImplementation(() => result);

    expect(service.getPosts(limit, offset)).toBe(result);
  });

  it('should return a post by ID', () => {
    const result = { userId: 1, id: 1, title: 'Test', body: 'Test body' };
    jest.spyOn(repository, 'findOne').mockImplementation(() => result);

    expect(service.getPostById('1')).toBe(result);
  });
});
