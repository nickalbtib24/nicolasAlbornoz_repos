import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TribesModule } from 'src/tribes/tribes.module';
import { RepositoriesController } from './repositories.controller';
import { RepositoryEntity } from './repositories.entity';
import { RepositoriesService } from './repositories.service';

@Module({
  exports: [RepositoriesService],
  controllers: [RepositoriesController],
  providers: [RepositoriesService],
  imports: [
    TypeOrmModule.forFeature([RepositoryEntity]),
    TribesModule
  ]
})
export class RepositoriesModule {}
