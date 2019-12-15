import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ChatRequestComponent } from '../chat-request/chat-request.component';

@Component({
  selector: 'init-component',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent {

  @Input() username = '';

  @Output() onStartChat: EventEmitter<string> = new EventEmitter<string>();

  friendUsername: string;

  constructor() {
    this.friendUsername = '';
  }

  onStartChatClick() {
    this.onStartChat.emit(this.friendUsername);
  }
}
