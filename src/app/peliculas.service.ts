import { Injectable } from '@angular/core';

@Injectable()
export class PeliculasService {
  constructor() { }
  getPelicula(punt:number){
  	let peli="Batman vs. Superman - Puntuación: "+punt;
  	return peli;
  }
}
