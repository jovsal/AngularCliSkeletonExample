import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	private url='http://localhost:3001/';
	
	dataReceived=true;

  constructor(private http: Http) { }

	getUsers() {
		return this.http.get(this.url+'users').map( res => res.json());
	}
	
	getUsersWithReposCount() {
		return this.http.get(this.url+'users').map( res => res.json())
			
	}
	
	getUserFollowers(u) {
		return this.http.get(this.url+u.login+'/followers').map(res => res.json())
	}
}
