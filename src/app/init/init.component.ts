import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'init-component',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent {

  @Input() username = '';

  @Output() onStartChat: EventEmitter<string> = new EventEmitter<string>();

  friendUsername = '';

  onStartChatClick() {
    this.onStartChat.emit(this.friendUsername);
  }
}
