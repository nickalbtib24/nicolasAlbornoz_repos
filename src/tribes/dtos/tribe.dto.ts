import { Expose } from 'class-transformer';
import { Organization } from 'src/organizations/organizations.entity';
import { RepositoryEntity } from 'src/repositories/repositories.entity';
export class TribeDto {
    @Expose()
    organization: Organization;

    @Expose()
    name: string;

    @Expose()
    status: number;

    @Expose()
    repositories: RepositoryEntity[]
}