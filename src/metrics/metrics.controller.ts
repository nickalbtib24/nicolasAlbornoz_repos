import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateMetricDto } from './dtos/create-metric.dto';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
    constructor(private metricsService: MetricsService) {}

    @Post('/:idRepository')
    createMetric(@Param('idRepository') idRepository: string, @Body() body: CreateMetricDto) {
        return this.metricsService.createMetric(body, parseInt(idRepository));
    }
}
