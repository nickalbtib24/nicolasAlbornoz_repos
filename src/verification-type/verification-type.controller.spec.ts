import { Test, TestingModule } from '@nestjs/testing';
import { VerificationTypeController } from './verification-type.controller';

describe('VerificationTypeController', () => {
  let controller: VerificationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerificationTypeController],
    }).compile();

    controller = module.get<VerificationTypeController>(VerificationTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
