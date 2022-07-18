import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { Metric } from './metrics.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  providers: [MetricsService],
  controllers: [MetricsController],
  imports: [
    TypeOrmModule.forFeature([Metric]),
    RepositoriesModule
  ]
})
export class MetricsModule {}
