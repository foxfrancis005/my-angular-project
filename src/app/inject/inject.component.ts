import { Component, OnInit } from '@angular/core';
import {HeroCollectorService} from '../hero-collector.service';
//Este componente muestra una inyeccion de una dependencia

 
@Component({
    selector: 'app-inject',
    template: 
    `<h2>Inyectores listos!!</h2>
    <button (click)="action()">{{btnmsg}}</button><br>
    <div *ngIf="lista!=null">
        <div *ngFor='let item of lista'>
            <h3>{{item.name}}:</h3>
            <span>id:</span><span style="font-weight:bold;">{{item.id}}</span><br>
            <span>Poderes:</span><span style="font-weight:bold;">{{item.power}}</span><br>
            <span>alterEgo:</span><span style="font-weight:bold;">{{item.alterEgo}}</span><br>
        <div>
    </div>`//,
    
    // providers: [HeroCollectorService]
})

export class InjectComponent {
    lista=null;
    btnmsg="Click para obtener heroes";
    constructor(public hcs:HeroCollectorService) {}
    
    ObtenerHeroes(){
        this.lista=this.hcs.getHeroes();
    }

    action(){
        if(this.lista==null){
            this.lista=this.hcs.getHeroes();
            this.btnmsg="Click para ocultar heroes";       
        }else{
            this.lista=null;
            this.btnmsg="Click para obtener heroes";
        }
    }
    
}
