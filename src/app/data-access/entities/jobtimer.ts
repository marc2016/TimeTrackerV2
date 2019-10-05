import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { User } from './user';
import { Project } from './project';

@Entity()
export class JobTimer {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    description: string

    @Column()
    note: string

    @Column()
    duration: number

    @Column()
    date: Date

    @Column()
    start: Date

    @Column(type => User)
    user: User

    @Column(type => Project)
    project: Project
}