import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private clockSubject: Subject<number>;
  private seconds: number;
  private timer: any;

  constructor(private http: HttpClient) {
    this.clockSubject = new Subject<number>();
    this.seconds = 0;
  }

  start() {
    this.stop();


    this.timer = setInterval(() => {
      this.seconds++;
      this.clockSubject.next(this.seconds);
    }, 1000);
    // this.timer();
  }

  reset() {
    this.seconds = 0;
  }


  stop() {
    clearInterval(this.timer);
    this.reset();
  }


  getClockObservable(): Observable<number> {
    return this.clockSubject;
  }
}


