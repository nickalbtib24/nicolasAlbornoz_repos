import { Module } from '@nestjs/common';
import { VerificationTypeService } from './verification-type.service';
import { VerificationTypeController } from './verification-type.controller';

@Module({
  exports: [VerificationTypeService],
  providers: [VerificationTypeService],
  controllers: [VerificationTypeController]
})
export class VerificationTypeModule {}
