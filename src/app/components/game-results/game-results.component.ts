import { Component, OnInit } from '@angular/core';
import { GameResultsService } from 'src/app/services/game-results.service';
import { GameResult } from 'src/app/models/gameResult';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  public gameResult: GameResult[];

  constructor(private gameResultService: GameResultsService, private userService: UserService) { }

  ngOnInit() {
    const results = this.gameResultService.GetAllResults();
    results.subscribe(gameResult => {
      this.gameResult = gameResult;
      this.gameResult.forEach((result: GameResult) => {
        if (result.gameSessionLength !== 0) {
          console.log(result.gameSessionLength);
        }
      });
    });
  }
}
