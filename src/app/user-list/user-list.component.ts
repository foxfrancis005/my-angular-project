import { Component, OnInit } from '@angular/core';
//Este componente muestra un ejemplo de directiva estructurada: ngFor y ngIf
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names:string[]; //Declarando un item array de strings
  nomb:string;
  flag:boolean;
  constructor() {
  	this.flag=false;
  	this.nomb='';
  	this.names=['Pedro Mendez','Maria Guadalupe','Josefa Martinez','Miguel Perez','Saul Villanueva'];	
  }

  ngOnInit() {
  }

  hide(){
  	this.flag=!this.flag;
  }
  
  enviarnom(nombre){
  	this.nomb=nombre;
  	this.flag=true;
  }
}
