import { Component, OnInit } from '@angular/core';
//Este componente muestra una inyeccion de una dependencia (una clase en el mismo componente)

export class UserFactory {
    constructor() {}
    mkmsg(){
    	console.log("UserFactory Injected");
    }
}
 
@Component({
    selector: 'app-inject',
    template: 
    `<h2>Inyectores listos!!</h2>
    <button (click)="usar()">Click para inyectar la dependencia</button>`,
    providers: [UserFactory]
})
 
export class InjectComponent {
	obj;
    constructor(userFac: UserFactory) {
    	this.obj=userFac;
    }
    usar(){
    	this.obj.mkmsg();
    }
}
