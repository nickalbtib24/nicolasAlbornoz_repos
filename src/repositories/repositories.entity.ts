import { Metric } from '../metrics/metrics.entity';
import { Tribe } from '../tribes/tribes.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RepositoryEntity {

    @PrimaryGeneratedColumn({
        name: 'id_repository'
    })
    idRepository: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false,
        type: 'char'
    })
    state: string;

    @Column({
        nullable: false,
        type: 'timestamp'
    })
    createTime: string;

    @Column({
        nullable: false,
        type: 'char'
    })
    status: string;

    @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
    tribe: Tribe;

    @OneToOne(() => Metric, {
        eager: true
    })
    @JoinColumn()
    metric: Metric;

}