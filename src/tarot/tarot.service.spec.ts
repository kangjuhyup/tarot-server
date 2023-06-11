import { Test, TestingModule } from '@nestjs/testing';
import { TarotService } from './tarot.service';

describe('TarotService', () => {
  let service: TarotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarotService],
    }).compile();

    service = module.get<TarotService>(TarotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
