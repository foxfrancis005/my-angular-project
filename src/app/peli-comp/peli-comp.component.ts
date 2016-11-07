import { Component, OnInit } from '@angular/core';

import {PeliculasService} from '../peliculas.service';
/*Se importa el servicio PeliculasService y ValidacionService. Aunque este declarado n el modulo,
se debe importar en el componente*/
import {ValidacionService} from '../validacion.service';
//Este componente utiliza dos servicios: PeliculasService y ValidacionService. Los metodos del componente invocan a los metodos del servicio.
@Component({
  selector: 'app-peli-comp',
  template:
  `<h1>Llamando a un servicio</h1>
  <input type="number" #puntaje><button (click)="conseguirpeli(puntaje.value)">Obtener pelicula</button>
  <h2>{{pelicula_conseguida}}</h2>
  <input type="text" #textoin>
  <button (click)="validar(textoin.value)">validar</button>
  <h3 *ngIf="flag">Ingresa solo numeros</h3>`//,
  // providers:[ValidacionService]
})
/*Explicando el template:
input tiene una variable local #puntaje, la cual es visible para todo el template.
El boton manda a llamar un metodo, el cual se le envia como argumento la variable local de input.
pelicula_conseguida es utilizada como recipiente del resultado del metodo llamado por el boton.
ValidacionService hace una función muy similar a PeliculasService.

Se hace uso de dos servicios. PeliculasService esta declarado
como provider en el modulo (app.module.ts) Si esta declarado en el modulo, no es
necesario declararlo proveedor dentro de este componente. ValidacionService
no esta declarado en el módulo, por lo tanto se tiene que declarar como proveedor 
en el componente que se esté usando.
Se sabe que el modulo puede aceptar mas de dos providers; en este caso, la notacion
se convierte en un vector: providers: [PeliculasService],[ValidacionService],[Provider3]*/
export class PeliCompComponent implements OnInit {
	pelicula_conseguida="null";
	flag=false;//Para activar el mensaje
  constructor(public peliculaService:PeliculasService,public validService:ValidacionService) { }
  /*En el constructor se declara como parametro el nombre del servicio,
    el cual se iguala a una variable local para que pueda ser utilizada.
    peliculaService se convierte en subclase que contiene la clase 
    original del servicio. Esta sublcase se puede usar para instanciar un objeto y asi usarlo.
    si las subclases son declaradas como public, no es necesario instanciar un objeto con esta clase*/
  conseguirpeli(punt){
  	this.pelicula_conseguida=this.peliculaService.getPelicula(punt);
  }

  validar(texto){
  	console.log(this.validService.validarNum(texto));
    this.flag=true;
  }
  
  ngOnInit() {
  }

}
