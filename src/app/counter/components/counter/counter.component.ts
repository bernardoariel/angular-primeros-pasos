import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3>Counter:{{ counter }}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reiniciarCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`
})
export class CounterComponent {

  public initialValue = 10;
  public counter:number = this.initialValue;

  increaseBy(valor:number):void{
    this.counter += valor;
  }
  reiniciarCounter():void{
    this.counter = this.initialValue;
  }
}
