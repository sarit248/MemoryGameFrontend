import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:59695/api/users');
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:59695/api/users', user).pipe(catchError(this.handleError));
  }

  private handleError(error: any, caught: Observable<User>) {
    if (error && error.error) {
      const errors = error.error.map(e => e.property + ': ' + e.errors).toString();
      Swal('Registration', errors, 'error');
    } else {
      Swal('Registration', JSON.stringify(error.error), 'error');
    }
    return throwError(JSON.stringify(error));
  }

  public getOneUser(userID: number): Observable<User> {
    return this.httpClient.get<User>(
      'http://localhost:59695/api/users/' + userID
    );
  }

  public getUser(user: User): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:59695/api/user', user)
      .pipe(catchError(this.handleError));
  }
}

