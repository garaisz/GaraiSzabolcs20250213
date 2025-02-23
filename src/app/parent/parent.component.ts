import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  inputA: number = 0;
  inputB: number = 0;

  result: number = 0;
  
  resultHandler(message: number) {
    this.result = message;
  }

}
