import { user } from './user';

export class poll {
    pollId:string;
    homeTeamName:string;
    awayTeamName:string;
    dateBall:Date;
    timeBall:string;
    timeEndPoll:string;
    scoreBall:string;
    voteHomeTeam:user[];
    voteAwayTeam:user[];
    pollStatus:string;
    luckyName:string;
    luckyTel:string;
}