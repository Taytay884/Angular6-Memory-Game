import {CardColorEnum} from './card-color.enum';

export class Card {
  public value: number;
  public isFlipped: boolean;
  public color: CardColorEnum;

  constructor(value, color) {
    this.value = value;
    this.isFlipped = false;
    this.color = color;
  }
}
