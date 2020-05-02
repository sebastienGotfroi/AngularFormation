import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, interval } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  seconds: number;
  counterSubscription: Subscription;

  constructor() {

  }
  ngOnInit() {
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.seconds = value;
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
