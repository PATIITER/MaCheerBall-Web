import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoteAddPageRoutingModule } from './vote-add-routing.module';

import { VoteAddPage } from './vote-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoteAddPageRoutingModule
  ],
  declarations: [VoteAddPage]
})
export class VoteAddPageModule {}
