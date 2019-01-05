import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private httpClient: HttpClient) { }

  public GetAllMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(
      'http://localhost:59695/api/messages'
    );
  }

  public AddMessage(message: Message): Observable<Message> {
    return this.httpClient.post<Message>('http://localhost:59695/api/messages', message).pipe(catchError(this.handleError));
  }

  public getOneMessage(messageID: number): Observable<Message> {
    return this.httpClient.get<Message>(
      'http://localhost:59695/api/messages/' + messageID
    );
  }


  private handleError(error: any, caught: Observable<Message>) {
    if (error && error.error) {
      const errors = error.error.map(e => e.property + ': ' + e.errors).toString();
      Swal('message', errors, 'error');
    } else {
      Swal('message', JSON.stringify(error.error), 'error');
    }
    return throwError(JSON.stringify(error));
  }
}
