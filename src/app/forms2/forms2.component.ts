import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html'
})
export class Forms2Component implements OnInit {

  constructor() {}

  ngOnInit() {}

  onSubmit(f:NgForm){
  	console.log(f);
  }

}
