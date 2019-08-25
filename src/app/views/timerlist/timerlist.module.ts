import { NgModule } from '@angular/core';

import { TimerlistComponent } from './timerlist.component'
import { TimerlistRoutingModule } from './timerlist-routing.module';

@NgModule({
  imports: [
      TimerlistRoutingModule
  ],
  declarations: [ TimerlistComponent ]
})
export class TimerlistModule { }
