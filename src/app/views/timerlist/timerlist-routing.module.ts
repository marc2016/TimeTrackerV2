import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerlistComponent } from './timerlist.component';

const routes: Routes = [
  {
    path: '',
    component: TimerlistComponent,
    data: {
      title: 'Timer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerlistRoutingModule {}
