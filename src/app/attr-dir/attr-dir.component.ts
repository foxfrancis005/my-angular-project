import { Component, OnInit } from '@angular/core';
//Este componente demuestra las directivas atributo.
@Component({
  selector: 'app-attr-dir',
  template:
  `<h2>Directivas atributo</h2>
  <h3>ngModel:</h3>
  <input type="text" [(ngModel)]="nombre"><br>
  <span style="font-weight:bold;">nombre: {{nombre}}</span>
  <h3>ngClass:</h3>
  <div [ngClass]="setTodoClasses()" [ngStyle]="setStyles()">Este ToDo es importante y está pendiente</div>`
})
export class AttrDirComponent implements OnInit {
	nombre:string;
	isDone:boolean;
	isImportant:boolean;
  constructor() {
  	this.nombre="Jose Mendez";
  	this.isDone=true;
  	this.isImportant=true;
  }

  setTodoClasses(){
  	let classes={ //Coleccion de elementos (similar al json)
  		pending: !this.isDone, //classes.isDone. (false)
  		done:this.isDone, //(true)
  		important:this.isImportant //true
  	};
  	return classes;
  }

  setStyles(){
  	let styles={
  		'color': this.isDone ? 'blue':'red',
  		'border': this.isImportant ? 'solid 1px black':'solid 1px blue'
  	};
  	return styles;
  }

  ngOnInit() {
  }

}
