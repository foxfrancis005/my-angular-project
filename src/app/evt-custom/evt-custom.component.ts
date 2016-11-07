import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//Este componente demuestra un ejemplo de event binding custom con la ayuda de app-component. Observar el uso de Output
@Component({
  selector: 'app-evt-custom',
  template:
  `<button class="btn btn-success" (click)="emitirevt()">Clickeame!!!</button>`,
})
/*En este esquema, se requiere de un componente padre y un componente hijo.
Este componente representa el componente hijo, mientras que el componente 
donde esta declarado el evento custom (app-component) es el componente padre.
El componente hijo esta listo para emitir el evento real, y asi ejecutar el 
metodo que se declaró en app-component. Este mismo contiene el decorador @output 
para hacer dicha acción. El decorador @Output funciona como un comunicador 
hacia un elemento externo. El evento custom que se declaró en el componente padre 
se instancia con la clase EventEmitter. Esta clase posee un metodo para emitir 
el evento declarado. Cuando el evento se emite, angular entiende que el evento ha 
ocurrido y procede a ejecutar el metodo especificado en app-component
Piense que el componente hijo solo contiene el evento real (el cual, en este
caso no se expresa como (click) en app-component), el cual se emitirá hacia
el componente padre para ejecutar la función especificada en el componente padre*/
export class EvtCustomComponent implements OnInit {
	@Output() Myclick = new EventEmitter();

  ngOnInit() {}

  emitirevt(){
  	this.Myclick.emit();
  }

}
