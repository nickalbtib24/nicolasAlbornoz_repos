import { Tribe } from '../tribes/tribes.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Organization {
    @PrimaryGeneratedColumn({
        name: 'id_organization'
    })
    idOrganization: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false
    })
    status: number;

    @OneToMany(() => Tribe, (tribe) => tribe.organization)
    tribes: Tribe[];
}