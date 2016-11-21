import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-observable',
  template: `<b>Angular 2 Component Using Observables!</b>

      <h6 style="margin-bottom: 0">VALUES:</h6>
      <div *ngFor="let value of values">- {{ value }}</div>

      <h6 style="margin-bottom: 0">ERRORs:</h6>
      <div>Errors: {{anyErrors}}</div>

      <h6 style="margin-bottom: 0">FINISHED:</h6>
      <div>Finished: {{ finished }}</div>

      <button style="margin-top: 2rem;" (click)="init()">Init</button>
      <h3>HTTP Get:</h3>
      <ul *ngFor="let item of doctors">
      	<li><b>id:</b> {{item.id}}</li>
      	<li><b>Username:</b> {{item.username}}</li>
      	<li><b>name:</b> {{item.name}}</li>
      	<li><b>address:</b>
      		<ul>
      			<li><b>street:</b> {{item.address.street}}</li>
      			<li><b>suite:</b> {{item.address.suite}}</li>
      			<li><b>city:</b> {{item.address.city}}</li>
      		</ul>
      	</li>
      </ul>`,
})
export class ObservableComponent implements OnInit {
	private data: Observable<Array<number>>;
	private values:number[]=[21,12,34];
	private anyErrors: boolean;
	private finished: boolean;
	private doctors = [];

  constructor(http:Http) {
  	http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.doctors.push(data);

        });
  }

  ngOnInit() {}

  init(){
  	this.data = new Observable(observer => {
		setTimeout(() => {
			observer.next(42);
		}, 1000);

		setTimeout(() => {
			observer.next(43);
		}, 2000);

		setTimeout(() => {
			observer.complete();
		}, 3000);
	});

	let subscription = this.data.subscribe(
		value => this.values.push(value),
		error => this.anyErrors = true,
		() => this.finished = true
	);
  }

}
