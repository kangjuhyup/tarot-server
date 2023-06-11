import { Test, TestingModule } from '@nestjs/testing';
import { TarotController } from './tarot.controller';

describe('TarotController', () => {
  let controller: TarotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarotController],
    }).compile();

    controller = module.get<TarotController>(TarotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
