import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { ActivatedRoute } from '@angular/router';
import { poll } from '../models/poll';

@Component({
  selector: 'app-vote-check',
  templateUrl: './vote-check.page.html',
  styleUrls: ['./vote-check.page.scss'],
})
export class VoteCheckPage implements OnInit {

  getid:string;
  pollbyId:poll;

  constructor(public callapi:CallapiService , public activated:ActivatedRoute) {
    this.getid = activated.snapshot.paramMap.get('_id');
    console.log(this.getid);
    callapi.GetPollByid(this.getid).subscribe(it =>{
      // console.log(it);
      this.pollbyId = it;
      console.log(this.pollbyId);
    });
   }

  ngOnInit() {
  }



}
