import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './templates/clock.component.html'
})
export class ClockComponent implements OnInit {
  clock: string;
  hour: string;
  minute: string;
  second: string;

  constructor() {
    this.currentTime();
  }

  ngOnInit(): void {
  }

  currentTime(): void {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    // convert from military to civilian time
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour = hour - 12;
    }

    this.hour = this.updateTime(hour);
    this.minute = this.updateTime(min);
    this.second = this.updateTime(sec);

    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";

    this.clock = this.hour + " : " + this.minute + " : " + this.second + " : " + midday;

    setInterval(() => this.currentTime(), 1000); /* setting timer */
  }

  updateTime(timeElement: number): string {
    if (timeElement < 10) {
      return "0" + timeElement;
    }
    else {
      return timeElement.toString();
    }
  }
}
