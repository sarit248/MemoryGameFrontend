import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserFeedback } from '../models/userFeedback';

@Injectable({
  providedIn: 'root'
})
export class UsersFeedbackService {
  constructor(private httpClient: HttpClient) { }

  public GetAllFeedbacks(): Observable<UserFeedback[]> {
    return this.httpClient.get<UserFeedback[]>(
      'http://localhost:59695/api/usersFeedback'
    );
  }

  public AddFeedback(userFeedback: UserFeedback): Observable<UserFeedback> {
    return this.httpClient.post<UserFeedback>(
      'http://localhost:59695/api/usersFeedback',
      userFeedback
    );
  }
}
