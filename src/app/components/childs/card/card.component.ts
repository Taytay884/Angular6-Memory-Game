import {
  AfterViewInit,
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2,
  ViewChild
} from '@angular/core';
import {Card} from '../../../entities/card.model';

@Component({
  selector: 'app-board-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  @Input() card: Card;
  @Output() handleCardSelect = new EventEmitter<Card>();
  @ViewChild('cardFront', {read: ElementRef}) cardFrontElement: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.cardFrontElement.nativeElement, 'background-color', this.card.color);
  }
  handleCardFlip() {
    this.handleCardSelect.next(this.card);
  }
}
