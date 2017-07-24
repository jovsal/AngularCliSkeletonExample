import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	@ViewChild('el') el: ElementRef;

	users=[];
	dataReceived=false;
	
  constructor(public userService: UserService) {  }

  ngOnInit() {
		
		this.userService.getUsersWithReposCount()
			.subscribe( us => {
					us.forEach( (u, idx, arr) => {
						this.userService.getUserFollowers(u)
							.subscribe( res => {
									u.followersCount = res.length;
									res.length;
									if (idx === arr.length - 1){ this.dataReceived=true; }
								});
					});
					this.users = us; 
					console.log(this.users)
				},
				err => alert('error happen')
			);
  }
	
	onElClick(e) {
		console.log('el.attributes.class');
		console.log(this.el.nativeElement.attributes.class.textContent);
	}


}
