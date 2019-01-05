import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  //   private tick: number;
  //   private subscription: Subscription;

  //   constructor() {
  //   }

  //   ngOnInit() {
  //     const timer = TimerObservable.create(2000, 1000);
  //     this.subscription = timer.subscribe(t => {
  //       this.tick = t;
  //     });
  //   }

  //   ngOnDestroy() {
  //     this.subscription.unsubscribe();
  //   }
  // }
  private clockSubscription: Subscription;
  public seconds = 0;

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clockSubscription = this.clockService.getClockObservable().subscribe(time => {
      this.seconds = time;
    });

    this.clockService.start();
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }

}
