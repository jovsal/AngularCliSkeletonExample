import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

	@Input() user;
	@Output() pictureClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
	
	firstLetterUpperCase(s) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}

}
