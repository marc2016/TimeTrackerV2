import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTables1570299996281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'project',
            columns: [
                {
                    name: 'id',
                    type: 'string',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'description',
                    type: 'string'
                }
            ]
        }))

        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'string',
                    isPrimary: true
                },
                {
                    name: 'firstname',
                    type: 'string'
                },
                {
                    name: 'lastname',
                    type: 'string'
                },
                {
                    name: 'email',
                    type: 'string'
                }
            ]
        }))

        await queryRunner.createTable(new Table({
            name: 'jobtimer',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'note',
                    type: 'varchar'
                },
                {
                    name: 'duration',
                    type: 'int'
                },
                {
                    name: 'date',
                    type: 'date'
                },
                {
                    name: 'start',
                    type: 'dateTime'
                },
                {
                    name: 'user',
                    type: 'string'
                }
            ]
        }), true)

        await queryRunner.createForeignKeys('jobtimer',[
            new TableForeignKey({
                columnNames: ["user"],
                referencedColumnNames: ["id"],
                referencedTableName: "user",
                onDelete: "CASCADE"
            }),
            new TableForeignKey({
                columnNames: ["project"],
                referencedColumnNames: ["id"],
                referencedTableName: "project",
                onDelete: "CASCADE"
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
