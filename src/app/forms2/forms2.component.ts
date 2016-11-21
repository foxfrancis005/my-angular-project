import { Component, OnInit } from '@angular/core';
// import {NgForm,FormGroup,FormControl,ReactiveFormsModule,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html'
})
export class Forms2Component implements OnInit {
  constructor() {
  }

  onSubmit(){
    alert("Submitted!!");
  }

  ngOnInit() {}
}
