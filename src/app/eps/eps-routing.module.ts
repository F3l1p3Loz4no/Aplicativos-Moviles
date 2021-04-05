import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpsPage } from './eps.page';

const routes: Routes = [
  {
    path: '',
    component: EpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpsPageRoutingModule {}
