import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote-add',
  templateUrl: './vote-add.page.html',
  styleUrls: ['./vote-add.page.scss'],
})
export class VoteAddPage implements OnInit {

  constructor(public alertController:AlertController,public router : Router) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
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
