import { Organization } from '../organizations/organizations.entity';
import { RepositoryEntity } from '../repositories/repositories.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Tribe {

    @PrimaryGeneratedColumn({
        name: 'id_tribe'
    })
    idTribe: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false
    })
    status: number;

    @ManyToOne(() => Organization, (organization: Organization) => organization.tribes)
    organization: Organization;

    @OneToMany(() => RepositoryEntity, (repository: RepositoryEntity) => repository.tribe, {
        eager: true
    })
    repositories: RepositoryEntity[] ;
}