import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoteEditPageRoutingModule } from './vote-edit-routing.module';

import { VoteEditPage } from './vote-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoteEditPageRoutingModule
  ],
  declarations: [VoteEditPage]
})
export class VoteEditPageModule {}
