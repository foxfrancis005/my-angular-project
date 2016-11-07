import { Component, OnInit, Input } from '@angular/core';
//Este componente recibe un valor del input-in-view (Proprty binding)
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
	@Input() nombre: string; 
	/*El decorador @Input prepara una variable para que sea capaz de recibir
	datos del exterior (lo inverso a @Output)(Observar el template).*/
  constructor() {}

  ngOnInit() {}

}
