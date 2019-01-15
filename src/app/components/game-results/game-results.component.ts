import { Component, OnInit } from '@angular/core';
import { GameResultsService } from 'src/app/services/game-results.service';
import { GameResult } from 'src/app/models/gameResult';
import { UserService } from 'src/app/services/user.service';
// import { MomentModule } from 'angular2-moment';



@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  public gameResult: GameResult[];
  // public datePlayed: Date;
  // public gameSessionLength: Date;

  constructor(private gameResultService: GameResultsService, private userService: UserService) { }

  ngOnInit() {
    // this.datePlayed = new Date();
    // const myDate = moment(this.datePlayed).format('MM/DD/YYYY HH:mm');
    // console.log(this.datePlayed);
    // this.datePlayed.toLocaleString();
    // this.datePlayed = new Date(this.datePlayed.valueOf() + this.datePlayed.getTimezoneOffset() * 60000);




    const results = this.gameResultService.GetAllResults();
    results.subscribe(gameResult => {
      this.gameResult = gameResult;
      this.gameResult.forEach((result: GameResult) => {
        // result['myDate'] = myDate;
        if (result.gameSessionLength !== 0) {
          console.log(result.gameSessionLength);
        }
      });
    });
  }
}
