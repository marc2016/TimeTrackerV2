import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

}