import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template:
  `<button class="btn btn-primary" (click)="OnClick()">Clickeame!!</button>
  <h1>{{clickMessage}}</h1>
  <h3>Escribe algo:</h3>
  <input type="text" (keypress)="onKey($event)"><br>
  <span style="font-weight:bold;">{{values}}</span>`,
})
export class HelloWorldComponent implements OnInit {

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
  	this.values+=event.target.value+'|';
  }

}
