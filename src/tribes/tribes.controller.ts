import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateTribeDto } from './dtos/create-tribe.dto';
import { TribeDto } from './dtos/tribe.dto';
import { TribesService } from './tribes.service';

@Controller('tribes')
export class TribesController {
    constructor(private tribesService: TribesService) {}
    
    @Post('/:idOrganization')
    createTribe(@Param('idOrganization') idOrganization: string, @Body() body: CreateTribeDto) {
        return this.tribesService.createTribe(body, parseInt(idOrganization));
    }

    @Get('/:id')
    findTribeById(@Param('id') id: string) {
        return this.tribesService.findTribeById(parseInt(id));
    }

    @Get('/repositories/:id')
    getTribeRepositories(@Param('id') id: string) {
        return this.tribesService.getTribeRepositories(parseInt(id));
    }
}
