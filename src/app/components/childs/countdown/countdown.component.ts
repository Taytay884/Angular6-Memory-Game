import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent {
  @Output() handleCountdownOver = new EventEmitter<null>();
  seconds: number;
  timerId = -1;
  constructor() { }

  startCountdown(seconds) {
    this.seconds = seconds;
    this.timerId = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        this.stopCountdown();
        this.handleCountdownOver.next();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.timerId);
  }
}
