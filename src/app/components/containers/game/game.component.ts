import {Component, OnInit} from '@angular/core';
import {GameStatus} from '../../../entities/game-status.enum';
import {Player} from '../../../entities/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private gameStatus = GameStatus; // Init gameStatus enum.
  private currGameStatus;
  public playersAmount;
  public players = [];

  constructor() {
  }

  ngOnInit() {
    this.currGameStatus = this.gameStatus.start;
  }

  resetGame() {
    this.currGameStatus = this.gameStatus.start;
  }

  startGame(playersAmount) {
    this.playersAmount = playersAmount;
    this.currGameStatus = this.gameStatus.inGame;
    this.initPlayers();
  }

  initPlayers() {
    for (let i = 0; i < this.playersAmount; i++) {
      this.players[i] = new Player(i + 1);
    }
  }

  onGameOver() {
    this.currGameStatus = this.gameStatus.gameOver;
  }
}
