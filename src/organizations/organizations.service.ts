import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './organizations.entity';

@Injectable()
export class OrganizationsService {
    constructor(@InjectRepository(Organization) private repository: Repository<Organization>) {}

    /**
     * A method that deletes a category from the database
     * @param name A name for the new organization.
     * @param status The status of the new organization.
     * @returns The created organization.
     */
    async createOrganization(name: string, status: number) {
        const organization = this.repository.create({name, status});

        return await this.repository.save(organization);
    }

    /**
     * A method that returns a list of all organizations
     * @returns a list of all organizations.
     */
    async listAllOrganizations() {
        return await this.repository.find();
    }

    /**
     * A method that updates an organization  by a given an id
     * @param idOrganization The id of the organization to update
     * @param attributes The partial organization object with the attributes to update
     * @returns the updated organization
     * @throws if the organization was not found
     */
    async updateOrganization(idOrganization: number, attributes: Partial<Organization>) {
        const organization = await this.repository.findOne({
            where: {
                idOrganization
            }
        });

        if (!organization) {
            throw new NotFoundException('Organization not found');
        }

        Object.assign(organization, attributes);

        return this.repository.save(organization);
    }

    /**
     * A method that removes an organization by a given an id
     * @param idOrganization The id of the organization to remove
     * @returns the removed organization
     * @throws if the organization was not found
     */
    async deleteOrganization(idOrganization: number) {
        const organization = await this.repository.findOne({
            where: {
                idOrganization
            }
        });

        if (!organization) {
            throw new NotFoundException('Organization not found');
        }

        return this.repository.remove(organization);
    }

    /**
     * A method that removes an organization by a given an id
     * @param idOrganization The id of the organization to retrieve
     * @returns the organization
     * @throws if the organization was not found
     */
    async findOrganizationById(idOrganization: number) {
        const organization = await this.repository.findOne({
            where: {
                idOrganization
            }
        });

        if (!organization) {
            throw new NotFoundException('Organization not found');
        }

        return organization;
    }
}