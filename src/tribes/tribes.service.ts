import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationsService } from 'src/organizations/organizations.service';
import { VerificationTypeService } from 'src/verification-type/verification-type.service';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { CreateTribeDto } from './dtos/create-tribe.dto';
import { Tribe } from './tribes.entity';

enum States {
    E = 'Enabled',
    D = 'Disabled',
    A = 'Archived'
}

enum Status {
    I = 'Inactive',
    A = 'Active'
}

@Injectable()
export class TribesService {

    private verificationTypes = new Map<number, string>([
        [604, 'Verificado'],
        [605, 'En espera'],
        [606, 'Aprobado']
    ]);

    constructor(
        @InjectRepository(Tribe) private repository: Repository<Tribe>,
        private organizationService: OrganizationsService,
        private verificationStateService: VerificationTypeService) {}

    
    /**
     * A method that creates a tribe and associates it to an organization given by id
     * @param tribeDto The dto used to create a tribe
     * @param idOrganization The id of the organization to retrieve
     * @returns the new tribe
     * @throws if the organization was not found
     */
    async createTribe(tribeDto: CreateTribeDto, idOrganization: number) {
        try {
            const organization = await this.organizationService.findOrganizationById(idOrganization);
            const tribe = await this.repository.create(tribeDto);
            tribe.organization = organization;
            return await this.repository.save(tribe);
        } catch (error) {
            throw error;
        }
    }

    async findTribeById(idTribe: number) {
        const tribe = await this.repository.findOne({
            where: {
                idTribe
            }
        });

        if (!tribe) {
            throw new NotFoundException('La Tribu no se encuentra registrada');
        }

        return tribe;
    }

    async getTribeRepositories(idTribe: number) {

        const tribe = await this.repository.findOne({
            where: {
                idTribe
            }
        });

        if (!tribe) {
            throw new NotFoundException('La Tribu no se encuentra registrada');
        }  

        const repositories = await this.repository.query(`
            SELECT r.id_repository AS "id", r."name" AS "name", t."name" AS "tribe", o."name" AS "organization", m.coverage, m."codeSmells", m.bugs, m.vulnerabilities, m.hotspot, r.state from tribe t
                left join repository_entity r on t.id_tribe = r."tribeIdTribe"
                left join metric m on m."repositoryIdRepository" = r.id_repository
                left join organization o on o.id_organization = t."organizationIdOrganization"
            where r."tribeIdTribe" = $1 AND m.coverage > 75 AND r.state = 'E';
        `, [idTribe]) as [];

        if (!repositories.length) {
            throw new NotFoundException('La Tribu no tiene repositorios que cumplan con la cobertura necesaria');
        }       

        repositories.map((repo: any) => {
            const verificationType: any = this.verificationStateService.getRepositoryVerificationType(repo.id);
            repo.verificationState = this.verificationTypes.get(verificationType.state);
        });

        return { repositories };
    }

}
