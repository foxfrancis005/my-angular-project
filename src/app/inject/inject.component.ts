import { Component, OnInit } from '@angular/core';
// import {SwitchDirComponent} from '../switch-dir/switch-dir.component';

@Component({
  selector: 'app-inject',
  template: 
  `<h2>{{titulo}}</h2>
  <app-switch-dir></app-switch-dir>`
})
export class InjectComponent implements OnInit {
	
  constructor() { }
  titulo="Inyectores listos";

  ngOnInit() {
  }
}
