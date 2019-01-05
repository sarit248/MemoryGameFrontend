import { Component, OnInit } from '@angular/core';
import { GameResultsService } from 'src/app/services/game-results.service';
import { GameResult } from 'src/app/models/gameResult';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  public gameResult: GameResult[];
  // public gameSessionLength: Date;

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
