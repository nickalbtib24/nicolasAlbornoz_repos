import { Test, TestingModule } from '@nestjs/testing';
import { VerificationTypeService } from './verification-type.service';

describe('VerificationTypeService', () => {
  let service: VerificationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerificationTypeService],
    }).compile();

    service = module.get<VerificationTypeService>(VerificationTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
