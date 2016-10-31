import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundooooo!!!!!!!';
  cadena='Cadena declarada en AppComponent';
  clickear(){
  	alert("Se ha accedido a la función clickear() dentro de app-component por medio de un evento custom");
  }
}
