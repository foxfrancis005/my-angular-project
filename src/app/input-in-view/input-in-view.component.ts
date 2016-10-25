import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-in-view',
  templateUrl: './input-in-view.component.html',
  styleUrls: ['./input-in-view.component.css']
})
export class InputInViewComponent implements OnInit {
	cadena:string;
  constructor() {
  	this.cadena="Vinicio";
  }

  ngOnInit() {
  }

}
