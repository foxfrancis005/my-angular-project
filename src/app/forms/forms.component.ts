import { Component } from '@angular/core';
import {Hero} from '../hero';

@Component({
  //moduleId: module.id,
  selector: 'hero-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
	powers:string[]=['Really smart','Electric ass','Autoclone','Material shrink','Attract bullets','Eat shit without get sick','Swim'];
	model:Object=new Hero(3,'ChupaMan',this.powers[3],'Syndro High');
	submitted:boolean=false;
	active:boolean=true;  

	onSubmit(){
		this.submitted=true;
	}

	//remove after:
	get diagnostic() {
		return JSON.stringify(this.model);
	}
	newHero(){
		this.model=new Hero(4,'','');
		this.active=false;
		setTimeout(()=>this.active=true,0);
	}
}
