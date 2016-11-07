import { Component, OnInit } from '@angular/core';
//Este componente demuestra el property binding con la ayuda del componente user-item
@Component({
  selector: 'app-input-in-view',
  templateUrl: './input-in-view.component.html',
  styleUrls: ['./input-in-view.component.css']
})
/*Este componente hace la función de padre. En el se encuentra la propiedad que
se va a insertar en el componente hijo. (Observar template)*/
export class InputInViewComponent implements OnInit {
	cadena:string;
  constructor() {
  	this.cadena="Maria Capirinha";
  }

  ngOnInit() {
  }

}
