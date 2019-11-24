import { Injectable } from '@angular/core';
import {Connection, ConnectionOptions, createConnection} from 'typeorm';

import { Settings } from './databaseConfig';

@Injectable()
export class DatabaseService {
    public connection: Promise<Connection>;
    private readonly options: ConnectionOptions;

    constructor() {
        Settings.initialize();
        this.options = {
            type: 'sqlite',
            database: Settings.dbPath,
            entities: [],
            migrationsRun: true,
            migrations: ['./migrations'],
            synchronize: true,
            logging: 'all',
        };
        this.connection = createConnection(this.options);
    }

    async runMigrations(): Promise<any> {
        const db = await this.connection
        return db.runMigrations()
    }
}