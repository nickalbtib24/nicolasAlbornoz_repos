import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateOrganizationDto } from './dtos/create-organization.dto';
import { OrganizationDto } from './dtos/organization.dto';
import { UpdateOrganizationDto } from './dtos/update-organization.dto';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
@Serialize(OrganizationDto)
export class OrganizationsController {
    constructor(private organizationsService: OrganizationsService) {}

    @Post()
    createOrganization(@Body() body: CreateOrganizationDto) {
        return this.organizationsService.createOrganization(body.name, body.status);
    }

    @Patch('/:id')
    updateOrganization(@Param('id') id: string, @Body() body: UpdateOrganizationDto) {
        return this.organizationsService.updateOrganization(parseInt(id), body);
    }

    @Get()
    listAllOrganizations() {
        return this.organizationsService.listAllOrganizations();
    }

    @Delete('/:id')
    deleteOrganization(@Param('id') id: string) {
        return this.organizationsService.deleteOrganization(parseInt(id));
    }
}
