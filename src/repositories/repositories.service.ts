import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TribesService } from 'src/tribes/tribes.service';
import { VerificationTypeService } from 'src/verification-type/verification-type.service';
import { Repository } from 'typeorm';
import { CreateRepositoryDto } from './dtos/create-repository.dto';
import { RepositoryEntity } from './repositories.entity';

@Injectable()
export class RepositoriesService {  
    constructor(
        @InjectRepository(RepositoryEntity) private repository: Repository<RepositoryEntity>,
        private tribesService: TribesService,
        private verificationType: VerificationTypeService
    ) {}

    /**
     * A method that creates a new repository and associates it to an existing tribe given by id
     * @param repositoryDto The dto used to create a repository
     * @param idTribe The id of the tribe to retrieve
     * @returns the new repository
     * @throws if the tribe was not found
     */
    async createRepository(repositoryDto: CreateRepositoryDto, idTribe: number) {
        try {
            const tribe = await this.tribesService.findTribeById(idTribe);
            const repository = await this.repository.create(repositoryDto);
            repository.tribe = tribe;
            const newRepository = await this.repository.save(repository);
            this.verificationType.createRepositoryVerificationType(newRepository.idRepository);
            return newRepository;
        } catch (error) {
            throw error;
        }
    }

    async findRepositoryById(idRepository: number) {
        const repository = await this.repository.findOne({
            where: {
                idRepository
            }
        });

        if (!repository) {
            throw new NotFoundException('Repository Not Found');
        }

        return repository;
    }

}
