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
  <div [ngClass]="setTodoClasses()" [ngStyle]="setStyles()">Este ToDo tiene como clase "done" y "important" pendiente</div>`
})
export class AttrDirComponent implements OnInit {
	nombre:string; //Esta variable muestra el two way binding cn interpolación
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
  		done:this.isDone, //true
  		important:this.isImportant, //true
      unclear:true
  	};
  	return classes; 
    /*El uso de [ngClass] se basa a partir de que en la etiqueta 
    que se esté utilizando se escribiran las clases que se deseen.
    En este ejemplo, se usa esta función para escribir clases segun un 
    procedimiento dentro del componente. Lo que recibe ngClass
    dentro de la etiqueta es una función que retorna un json donde 
    se escriben las clases. Cada clase debe estar igualada por una 
    expresión true.*/
  }

  setStyles(){
  	let styles={
  		'color': this.isDone ? 'blue':'red',
  		'border': this.isImportant ? 'solid 1px black':'solid 1px blue',
      'font-size':'20px'
    };
  	return styles;
    /*Similar al [ngClass], [ngStyle] permite escribir un estilo a 
    la etiqueta. En este ejemplo se ilustra como podrian asignarse 
    los estilos a partir de una expresión.*/
  }

  ngOnInit() {
  }

}
