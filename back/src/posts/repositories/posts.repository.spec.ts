import { Test, TestingModule } from '@nestjs/testing';
import { PostsRepository } from './posts.repository';

describe('PostsRepository', () => {
  let repository: PostsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsRepository],
    }).compile();

    repository = module.get<PostsRepository>(PostsRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should return all posts', () => {
    const posts = repository.findAll();
    expect(posts).toBeDefined();
    expect(posts.length).toBeGreaterThan(0);
  });

  it('should return a post by ID', () => {
    const post = repository.findOne(1);
    expect(post).toBeDefined();
    expect(post.id).toEqual(1);
  });

  it('should return undefined for a non-existent ID', () => {
    const post = repository.findOne(9999);
    expect(post).toBeUndefined();
  });
});
