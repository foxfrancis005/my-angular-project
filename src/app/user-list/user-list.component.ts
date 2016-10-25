import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names:string[]; //Declarando un item array de strings
  constructor() {
  	this.names=['Pedro Mendez','Maria Guadalupe','Josefa Martinez','Miguel Perez','Saul Villanueva'];	
  }

  ngOnInit() {
  }

}
