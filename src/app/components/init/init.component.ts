import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'init-component',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent {

  @Input()
  username = '';
  friendUsername = '';
}
