import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../../../../entities/player.model';

@Component({
  selector: 'app-game-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {
  @Input() players: Player[];
  @Output() handleNewGame = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }
  onNewGameButtonClicked() {
    this.handleNewGame.next();
  }

}
