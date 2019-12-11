import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteCheckPage } from './vote-check.page';

const routes: Routes = [
  {
    path: '',
    component: VoteCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteCheckPageRoutingModule {}
