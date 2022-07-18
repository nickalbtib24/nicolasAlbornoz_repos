import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateOrganizationDto } from './dtos/create-organization.dto';
import { Organization } from './organizations.entity';
import { OrganizationsService } from './organizations.service';

let fakeOrganizationsService: Partial<OrganizationsService>;
describe('OrganizationsService', () => {
  let service: OrganizationsService;

  beforeEach(async () => {
    const organizations: Organization[] = [];
    fakeOrganizationsService = {
      createOrganization: (name: string, status: number) => {
        if (!name || !status) throw new BadRequestException('Bad Request');
        const organization = {idOrganization: Math.floor(Math.random() * 99999), name, status} as Organization;
        organizations.push(organization);
        return Promise.resolve(organization);
      }
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganizationsService, 
        {
          provide: OrganizationsService,
          useValue: fakeOrganizationsService
        }
      ],
    }).compile();

    service = module.get<OrganizationsService>(OrganizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a new organization', async () => {
    const organizationSpy = await jest.spyOn(service, 'createOrganization');
    const dto = new CreateOrganizationDto();
    dto.name = 'name';
    dto.status = 1;
    const organization = await service.createOrganization(dto.name, dto.status);
    expect(organizationSpy).toHaveBeenCalledWith(dto.name, dto.status);
    expect(organization).toBeDefined();
  });
});
