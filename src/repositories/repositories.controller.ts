import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRepositoryDto } from './dtos/create-repository.dto';
import { RepositoriesService } from './repositories.service';

@Controller('repositories')
export class RepositoriesController {

    constructor(private repositoriesService: RepositoriesService) {}

    @Post('/:idTribe')
    createRepository(@Param('idTribe') idTribe: string, @Body() body: CreateRepositoryDto) {
        return this.repositoriesService.createRepository(body, parseInt(idTribe));
    }
}
