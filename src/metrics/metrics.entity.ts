import { RepositoryEntity } from '../repositories/repositories.entity';
import { Column, Double, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Metric {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    coverage: number;

    @Column({
        nullable: false
    })
    bugs: number;

    @Column({
        nullable: false
    })
    vulnerabilities: number;

    @Column({
        nullable: false
    })
    hotspot: number;

    @Column({
        nullable: false
    })
    codeSmells: number;

    @OneToOne(() => RepositoryEntity)
    @JoinColumn()
    repository: RepositoryEntity;
}