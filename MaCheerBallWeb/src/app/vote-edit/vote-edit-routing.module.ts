import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteEditPage } from './vote-edit.page';

const routes: Routes = [
  {
    path: '',
    component: VoteEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteEditPageRoutingModule {}
