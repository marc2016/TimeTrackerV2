import { NgModule } from '@angular/core';

import { TimerlistComponent } from './timerlist.component'
import { TimerlistRoutingModule } from './timerlist-routing.module';
import { TimeEntryComponent } from './time-entry/time-entry.component';

@NgModule({
  imports: [
      TimerlistRoutingModule
  ],
  declarations: [ TimerlistComponent, TimeEntryComponent ]
})
export class TimerlistModule { }
