import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { poll } from '../models/poll';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-vote-add',
  templateUrl: './vote-add.page.html',
  styleUrls: ['./vote-add.page.scss'],
})
export class VoteAddPage implements OnInit {

  data:FormGroup;
  dataPoll:poll;

  constructor(public callapi:CallapiService,public builder:FormBuilder,public alertController:AlertController,public router : Router) { 
    this.data = this.builder.group({
      'homeTeamName':[null,Validators.required],
      'awayTeamName':[null,Validators.required],
      'dateBall':[null,Validators.required],
      'timeBall':[null,Validators.required],
      'timeEndPoll':[null,Validators.required]
    });
  }

  ngOnInit() {
  }

  addnewpoll(){
    console.log(this.data.value);
    this.dataPoll = this.data.value;
    console.log(this.dataPoll);
    this.callapi.AddNewPoll(this.dataPoll).subscribe(it =>{
      console.log(it); 
       this.router.navigate(['/vote-list']);
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการเปิดโหวต',
      message: 'คุณต้องการเปิดโหวตหรือไม่ ?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Okay');
            this.addnewpoll();
          }
        }
      ]
    });

    await alert.present();
  }

}
