import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { poll } from '../models/poll';
import { PopoverOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://localhost:5001/api/";

  constructor(public http: HttpClient) { }

  public AddNewPoll(data) {
    console.log("add");
    return this.http.post<poll>(CallapiService.host + "Poll/AddPoll", data);
  }

  public GetAllPoll() {
    return this.http.get<poll>(CallapiService.host + "Poll/PollGetAllData");
  }

  public GetPollByid(id:string){
    return this.http.get<poll>(CallapiService.host + "Poll/PollGetByid/"+ id);
  }

  public DeletePoll(id: string) {
    return this.http.delete<poll>(CallapiService.host + "Poll/DeletePoll/" + id);
  }

  public SetScoreAndEndVote(id: string, score: string) {
    return this.http.get<poll>(CallapiService.host + "Poll/SetScoreBall/" + id + "/" + score);
  }
}
