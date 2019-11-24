import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { DatabaseService } from './data-access/database.service';

@Injectable()
export class AppLoadService {
  databaseService: DatabaseService

  constructor(databaseService: DatabaseService){
    this.databaseService = databaseService
  }

  initializeDatabase(): void {
    this.databaseService.runMigrations()
  }
}