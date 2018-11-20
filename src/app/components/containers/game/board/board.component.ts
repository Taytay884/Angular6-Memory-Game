import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Player} from '../../../../entities/player.model';
import {Card} from '../../../../entities/card.model';
import {ShuffleUtils} from '../../../../utils/shuffle';
import {ColorUtils} from '../../../../utils/color';
import {CountdownComponent} from '../../../childs/countdown/countdown.component';

const COUNTDOWN_SECONDS = 200;

@Component({
  selector: 'app-game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() players: Player[];
  @Output() handleGameOver = new EventEmitter<string>();
  @ViewChild(CountdownComponent) countdown: CountdownComponent;
  MAX_CARDS;
  cards: Card[] = [];
  countFoundCards = 0;
  firstChosenCard: Card = null;
  playerTurn;
  isStopCardSelecting = false;

  constructor() {
  }

  ngOnInit() {
    this.MAX_CARDS = 6 * this.players.length;
    this.initCards();
    this.initPlayerTurn();
  }

  initCards() {
    for (let i = 0, value = 1; i < this.MAX_CARDS; i += 2, value++) {
      this.cards[i] = new Card(value, ColorUtils.colorArr[i]);
      this.cards[i + 1] = new Card(value, ColorUtils.colorArr[i]);
    }
    this.cards = ShuffleUtils.shuffle(this.cards);
  }

  initPlayerTurn() {
    this.playerTurn = {
      playersIdx: 0,
      player: this.players[0]
    };
    this.countdown.startCountdown(COUNTDOWN_SECONDS);
  }

  nextPlayerTurn() {
    this.playerTurn.playersIdx = (this.playerTurn.playersIdx === (this.players.length - 1)) ? 0 : this.playerTurn.playersIdx + 1;
    this.playerTurn.player = this.players[this.playerTurn.playersIdx];
    this.countdown.stopCountdown();
    this.countdown.startCountdown(COUNTDOWN_SECONDS);
  }

  onCardSelect(card) {
    if (card.isFlipped || this.isStopCardSelecting) {
      console.log('Cannot click!');
      return;
    }

    const checkIfFoundPair = () => {
      if (this.firstChosenCard.value === card.value) {
        this.playerTurn.player.score++;
        this.countFoundCards++;
        this.checkIsGameOver();
      } else {
        this.nextPlayerTurn();
        this.firstChosenCard.isFlipped = false;
        card.isFlipped = false;
      }
      this.firstChosenCard = null;
      this.isStopCardSelecting = false;
    };

    card.isFlipped = true;
    if (this.firstChosenCard) {
      this.isStopCardSelecting = true;
      setTimeout(checkIfFoundPair, 1000);
    } else {
      this.firstChosenCard = card;
    }
  }

  checkIsGameOver() {
    if (this.countFoundCards === this.cards.length / 2) {
      this.handleGameOver.next();
    }
  }

  onCountdownOver() {
    if (this.firstChosenCard) {
      this.firstChosenCard.isFlipped = false;
      this.firstChosenCard = null;
    }
    this.isStopCardSelecting = false;
    this.nextPlayerTurn();
    this.countdown.startCountdown(COUNTDOWN_SECONDS);
  }
}
