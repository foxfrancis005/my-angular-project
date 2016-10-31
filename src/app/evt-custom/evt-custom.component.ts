import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//Este componente demuestra un ejemplo de event binding custom con la ayuda de app-component. Observar el uso de Output
@Component({
  selector: 'app-evt-custom',
  template:
  `<button class="btn btn-success" (click)="emitirevt()">Clickeame!!!</button>`,
})
export class EvtCustomComponent implements OnInit {
	@Output() Myclick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitirevt(){
  	this.Myclick.emit();
  }

}
