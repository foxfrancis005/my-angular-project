import { Component, OnInit } from '@angular/core';

import {PeliculasService} from '../peliculas.service';
import {ValidacionService} from '../validacion.service';
//Este componente utiliza dos servicios: PeliculasService y ValidacionService. Los metodos del componente invocan a los metodos del servicio.
@Component({
  selector: 'app-peli-comp',
  template:
  `<h1>Llamando a un servicio</h1>
  <input type="number" #puntaje><button (click)="conseguirpeli(puntaje.value)">Obtener pelicula</button>
  <h2>{{pelicula_conseguida}}</h2>
  <input type="text" #textoin>
  <button (click)="validar(textoin)">validar</button>
  <h3 *ngIf="flag">Ingresa solo numeros</h3>`,
  providers:[ValidacionService]
})
export class PeliCompComponent implements OnInit {
	pelicula_conseguida="null";
	flag=false;
  constructor(public peliculaService:PeliculasService,public validService:ValidacionService) { }

  conseguirpeli(punt){
  	this.pelicula_conseguida=this.peliculaService.getPelicula(punt);
  }

  validar(texto){
  	alert(this.validService.validarNum(texto));
  }
  
  ngOnInit() {
  }

}
