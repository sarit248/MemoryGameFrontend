import { UserService } from './../../services/user.service';
// import { CardsImagesService } from './../../services/cards-images.service';
import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/Image';
import { ImagesService } from '../../services/images.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameResult } from 'src/app/models/gameResult';
import { GameResultsService } from 'src/app/services/game-results.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ClockService } from 'src/app/services/clock.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  // public cardsImages: Image[];
  public images: Image[];
  public user: User;
  public imageOneElement;
  public imageTwoElement;
  public imageOne: Image;
  public imageTwo: Image;
  public amountOfOpenCards = 0;
  public totalAmountOfOpenCards: number;
  public stepsCounter: number;
  public startTime: Date;
  public endTime: Date;
  public gameSessionLength: Date;

  constructor(
    private imagesService: ImagesService,
    private userService: UserService,
    private router: Router,
    private gameResultsServie: GameResultsService,
    private clockService: ClockService
  ) { }

  ngOnInit() {
    this.startTime = new Date();
    this.stepsCounter = 0;

    this.imagesService.getAllImages().subscribe(images => {
      // concat - מחבר 2 מערכים
      images = images.slice(0, 2);
      this.images = images.concat(images);
      this.images = this.shuffle(this.images);
    });

    if (sessionStorage.getItem('userID')) {
      const userID = Number(sessionStorage.getItem('userID'));

      this.userService.getOneUser(userID).subscribe(user => {
        this.user = user;
      });
    } else {
      Swal('Login', 'Please log-in', 'error');
      this.router.navigate(['/login']);
    }
  }

  pickCard(event, card: Image) {
    if (!card.isUncovered && this.amountOfOpenCards < 2 &&
      (!this.imageOne || this.imageOneElement !== event.currentTarget)) {
      this.stepsCounter++;

      event.currentTarget.classList.toggle('flip'); // To toggle
      this.amountOfOpenCards++;
      if (!this.imageOne) {
        //   אם אין כלום באימג' אחד אז תכניס את קארד לאימג' אחד
        this.imageOne = card;
        this.imageOneElement = event.currentTarget;
      } else {
        this.imageTwo = card;
        this.imageTwoElement = event.currentTarget;
        setTimeout(() => {
          if (this.imageOne.imageName === this.imageTwo.imageName) {
            this.images.find(
              i => i.imageID === this.imageOne.imageID
            ).isUncovered = true;
            this.images.find(
              i => i.imageID === this.imageTwo.imageID
            ).isUncovered = true;

            // Check if game is done
            this.checkGameOver();
          }
        }, 1500);

        setTimeout(() => {
          this.imageOneElement.classList.toggle('flip');
          this.imageTwoElement.classList.toggle('flip');

          this.imageOneElement = undefined;
          this.imageTwoElement = undefined;
          this.imageOne = undefined;
          this.imageTwo = undefined;
          this.amountOfOpenCards = 0;

        }, 1500);
      }
      console.log(event, card);
    }
  }

  private checkGameOver() {
    if (!this.images.some(i => !i.isUncovered)) {
      this.endTime = new Date();
      const gameSessionLength = this.endTime.getTime() - this.startTime.getTime();
      const gameResult = new GameResult();
      gameResult.stepsTaken = this.stepsCounter;
      gameResult.datePlayed = this.startTime;
      gameResult.userID = this.user.userID;
      gameResult.gameSessionLength = gameSessionLength;
      this.clockService.stop();

      this.gameResultsServie.AddGameResult(gameResult).subscribe(g => {
        if (g) {
          Swal('You did it!', 'Great job!', 'success');

        }
        // this.router.navigateByUrl('/game');
      });
    }
  }

  refresh(): void {
    window.location.reload();
  }
  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
