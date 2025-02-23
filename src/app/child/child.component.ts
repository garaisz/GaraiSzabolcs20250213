import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() a: number = 0;
  @Input() b: number = 0;


  @Output() btnEvent = new EventEmitter<number>();

  btnPlus() {
    this.btnEvent.emit(this.a + this.b);
  }

  btnMinus() {
    this.btnEvent.emit(this.a - this.b);
  }

}
