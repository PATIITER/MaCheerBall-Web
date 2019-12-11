import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteAddPage } from './vote-add.page';

const routes: Routes = [
  {
    path: '',
    component: VoteAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteAddPageRoutingModule {}
