import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Output() handleGameStart = new EventEmitter<number>();
  public selectedPlayersAmount;
  public maxPlayersAmount;
  constructor() {
    this.selectedPlayersAmount = 1;
    this.maxPlayersAmount = new Array(4);
  }

  ngOnInit() {
  }

  onPlayersAmountChanged(playersAmount: number): void {
    this.selectedPlayersAmount = playersAmount;
  }

  onGameStart(): void {
    this.handleGameStart.next(this.selectedPlayersAmount);
  }

}
