import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppLoadService } from './appLoad.service';
import { DatabaseService } from './data-access/database.service';

export function init_database(appLoadService: AppLoadService) {
     return () => appLoadService.initializeDatabase();
}

@NgModule({
  imports: [],
  providers: [
    AppLoadService,
    DatabaseService,
    { provide: APP_INITIALIZER, useFactory: init_database, deps: [AppLoadService], multi: true },
  ]
})
export class AppLoadModule { }