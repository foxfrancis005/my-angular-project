import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http } from '@angular/http';
import {PaginationInstance} from 'ng2-pagination';
import 'rxjs/Rx';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

	comments = [];

	constructor(http:Http) {
		http.get('http://jsonplaceholder.typicode.com/comments')
			.flatMap((data) => data.json())
			.subscribe((data) => {
				this.comments.push(data);
			});
	}
	
	config:PaginationInstance={
		id:'tabla',
		itemsPerPage:10,
		currentPage:1,
	};

	ngOnInit() {}
}
