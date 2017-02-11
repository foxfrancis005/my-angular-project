import { Component, OnInit } from '@angular/core';
//Escte componente demuestra el event binding nativo
@Component({
  selector: 'app-hello-world',
  template:
  `<h1>EVENT BINDING</h1>
  <button class="btn btn-primary" (click)="OnClick()">Clickeame!!</button>
  <h1>{{clickMessage}}</h1>
  <h3>Escribe algo:</h3>
  <input type="text" (keyup)="onKey($event)"><br>
  <p>{{values}}<p>
  `
})

export class HelloWorldComponent implements OnInit {
  num:string;
  clickMessage:string;
  values:string;
  constructor(){
  	this.clickMessage='';
  	this.values='';
  }

  ngOnInit() {
  }

  OnClick(){
  	this.clickMessage=`Has clickeado`;
  }

  onKey(event:any){
  	this.values=event.target.value;
  }

}
