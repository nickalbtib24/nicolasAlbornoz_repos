import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoriesService } from 'src/repositories/repositories.service';
import { Repository } from 'typeorm';
import { CreateMetricDto } from './dtos/create-metric.dto';
import { Metric } from './metrics.entity';

@Injectable()
export class MetricsService {

    constructor(
        @InjectRepository(Metric) private repository: Repository<Metric>,
        private repositoriesService: RepositoriesService
    ) {}

    async createMetric(metricDto: CreateMetricDto, idRepository: number) {
        try {
            const repository = await this.repositoriesService.findRepositoryById(idRepository);
            const metric = await this.repository.create(metricDto);
            if (!metric.repository) {
                throw new BadRequestException('There is already a metric assigned to the repository.');
            }
            metric.repository = repository;
            const newMetric = await this.repository.save(metric);
            return metric
        } catch (error) {
            throw error;
        }
    }
}
