import { Module } from '@nestjs/common';
import { TribesService } from './tribes.service';
import { TribesController } from './tribes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribe } from './tribes.entity';
import { OrganizationsModule } from 'src/organizations/organizations.module';
import { VerificationTypeModule } from 'src/verification-type/verification-type.module';

@Module({
  exports: [TribesService],
  providers: [TribesService],
  controllers: [TribesController],
  imports: [
    OrganizationsModule,
    VerificationTypeModule,
    TypeOrmModule.forFeature([Tribe])
  ]
})
export class TribesModule {}
