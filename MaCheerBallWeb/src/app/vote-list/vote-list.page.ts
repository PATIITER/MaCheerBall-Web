import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CallapiService } from '../service/callapi.service';
import { poll } from '../models/poll';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.page.html',
  styleUrls: ['./vote-list.page.scss'],
})
export class VoteListPage implements OnInit {

  dataPoll:poll;
  getInputScore:string;

  constructor(public callapi: CallapiService, public router: Router, public alertController: AlertController) {
    
   }

  name1: any
  ngOnInit() {
    this.getallpoll();
  }
  ionViewDidEnter(){
    this.getallpoll();
  }

  getallpoll() {
    this.callapi.GetAllPoll().subscribe(it =>{
      this.dataPoll = it;
      console.log(this.dataPoll);
    });
  }

  deletedPoll(id){
    this.callapi.DeletePoll(id).subscribe(it =>{
      this.getallpoll();
    });
  }

  setscoreandEndvote(id,data){
    this.callapi.SetScoreAndEndVote(id,data).subscribe(it =>{
      console.log(it);
    });
  }

  gotoVoteCheck(id) {
    this.router.navigate(['/vote-check',{_id:id}]);
  }
  gopageVoteAdd() {
    this.router.navigate(['/vote-add'])
  }
  gotoVoteEdit() {
    this.router.navigate(['/vote-edit'])
  }

  async presentAlertPrompt1(id) {
    const alert = await this.alertController.create({
      header: 'กรอก Score',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'กรอก Score'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: alertData => {
            console.log('Confirm Ok');
            console.log(alertData);
            console.log(alertData.name1);
            this.getInputScore = alertData.name1;
            console.log(this.getInputScore);
            this.setscoreandEndvote(id,this.getInputScore);
            this.getallpoll();
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertPrompt(id) {
    const alert = await this.alertController.create({
      header: 'ลบข้อมูล!',
      message: 'ยืนยันการลบข้อมูล!!!',
      cssClass: 'danger',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',

          handler: () => {
            console.log('Confirm Okay');
            this.deletedPoll(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
