import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
 
@Component({
  selector: 'app-mysql-try',
  template: `<h2>HTTP Get:</h2>
  		<button class="btn btn-primary" (click)="dopost()">Do post</button>
      <ul *ngFor="let item of personajes">
      	<li><b>id:</b> {{item.personaje_id}}</li>
      	<li><b>Nombre:</b> {{item.nombre}}</li>
      	<li><b>Apellido:</b> {{item.apellido}}</li>
      	<li><b>Biografia:</b> {{item.biografia}}</li>
      </ul>`,
})
export class MysqlTryComponent implements OnInit {
	personajes = [];

  constructor(private http:Http) {
  	http.get('http://localhost:3000/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.personajes.push(data);
        });
  }

  dopost(){
  	alert('---EMPTY---');
  }

  ngOnInit() {}

}
