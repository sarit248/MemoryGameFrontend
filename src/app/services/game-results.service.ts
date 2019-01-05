import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameResult } from '../models/gameResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameResultsService {
  constructor(private httpClient: HttpClient) { }

  public GetAllResults(): Observable<GameResult[]> {
    return this.httpClient.get<GameResult[]>(
      'http://localhost:59695/api/gameResults'
    );
  }

  public AddGameResult(gameResult: GameResult): Observable<GameResult> {
    return this.httpClient.post<GameResult>(
      'http://localhost:59695/api/gameResults',
      gameResult
    );
  }

  public getOneUserResult(userID: number): Observable<GameResult> {
    return this.httpClient.get<GameResult>(
      'http://localhost:59695/api/gameResults/' + userID
    );
  }
}

