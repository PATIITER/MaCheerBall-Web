import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.page.html',
  styleUrls: ['./vote-list.page.scss'],
})
export class VoteListPage implements OnInit {

  constructor(public router : Router,public alertController:AlertController) { }

  name1:any
  ngOnInit() {
  }

  gotoVoteCheck(){
    
    this.router.navigate(['/vote-check'])

  }
  gopageVoteAdd(){
    this.router.navigate(['/vote-add'])
  }
  gotoVoteEdit(){
    this.router.navigate(['/vote-edit'])
  }

  async presentAlertPrompt1() {
    const alert = await this.alertController.create({
      header: 'กรอก Score',
      inputs: [
        {
          name: 'name',
          type: 'text',
          
           placeholder: '0 - 0'
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
          handler: (alertData) => {
            this.name1 = alertData.name
            console.log('Confirm Ok');
            console.log(alertData.name);
            
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'ลบข้อมูล!',
      message: 'ยืนยันการลบข้อมูล!!!',
      cssClass:'danger',
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
            this.router.navigate(['/vote-list'])
          }
        }
      ]
    });

    await alert.present();
  }

}
