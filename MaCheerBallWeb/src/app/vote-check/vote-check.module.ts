import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoteCheckPageRoutingModule } from './vote-check-routing.module';

import { VoteCheckPage } from './vote-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoteCheckPageRoutingModule
  ],
  declarations: [VoteCheckPage]
})
export class VoteCheckPageModule {}
