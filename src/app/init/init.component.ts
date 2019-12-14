import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'init-component',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  @Input()
  username: string;
  friendUsername: string;

  constructor() {
    this.username = 'randUserName';
    this.friendUsername = '';
   }

  ngOnInit() {
  }

}
