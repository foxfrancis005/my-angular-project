import { Component, OnInit } from '@angular/core';
//Este componente desmuestra el uso de ngSwitch
@Component({
  selector: 'app-switch-dir',
  template:
  `<h1>ngSwitch</h1>
  <button (click)="value=1">Boton 1</button>
  <button (click)="value=2">Boton 2</button>
  <button (click)="value=3">Boton 3</button>
  <h5>Haz seleccionado: {{value}}</h5>
  <br>
  <div [ngSwitch]="value">

     <div *ngSwitchCase="1"><span style="font-size:20px;">Francisco Jimenez - <b>{{value}}</b></span></div>
     <div *ngSwitchCase="2"><span style="font-size:20px;">Marco Vinicio - <b>{{value}}</b></span></div>
     <div *ngSwitchCase="3"><span style="font-size:20px;">Edgar Verduzco - <b>{{value}}</b></span></div>
     <div *ngSwitchDefault>Default Template</div>

  </div>`
})
/*La estructura del ngSwitch es igual a la de cualquier switch*/
export class SwitchDirComponent implements OnInit {
  value=0;
  constructor() { }

  ngOnInit() {
  }

}
