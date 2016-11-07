import { Injectable } from '@angular/core';
import {heroes} from './hero-list';

@Injectable()
export class HeroCollectorService {

  constructor() { }
  getHeroes(){
  	return heroes;
  }

}
