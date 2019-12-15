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

  isChatAccepted: boolean;

  constructor(private dialogService: NbDialogService) {
    this.friendUsername = '';
    this.isChatAccepted = false;
  }

  open() {
    this.dialogService.open(ChatRequestComponent, {
      context: {
        username: 'randUserName'
      },
      closeOnBackdropClick: false,
      closeOnEsc: false
    }).onClose.subscribe(confirmation =>  { this.isChatAccepted = confirmation; console.log(confirmation) });
  }

  onStartChatClick() {
    this.onStartChat.emit(this.friendUsername);
  }
}
