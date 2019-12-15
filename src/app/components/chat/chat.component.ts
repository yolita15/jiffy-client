import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @Input() messages: any[] = [];

  @Output() onSendMessage: EventEmitter<string> = new EventEmitter<string>();

  avatars: any[] = [
    { url: 'https://i.gifer.com/7M2n.gif' },
    { url: 'https://i.gifer.com/1fW0.gif' },
    { url: 'https://i.gifer.com/rR.gif' },
    { url: 'https://i.gifer.com/no.gif' },
    { url: 'https://i.gifer.com/G2zX.gif' },
    { url: 'https://i.gifer.com/L2Jz.gif' },
    { url: 'https://i.gifer.com/6JOX.gif' },
    { url: 'https://i.gifer.com/1zkb.gif' },
    { url: 'https://i.gifer.com/1Jus.gif' },
    { url: 'https://i.gifer.com/2E9.gif' },
    { url: 'https://i.gifer.com/YiVB.gif' },
    { url: 'https://i.gifer.com/7BQA.gif' },
    { url: 'https://i.gifer.com/7hb0.gif' },
    { url: 'https://i.gifer.com/3Jn.gif' }
  ];
  avatar: any;

  constructor() {
    this.avatar = this.avatars[Math.floor(Math.random() * this.avatars.length)];
  }

  sendMessage(event: any) {
    this.onSendMessage.emit(event.message);
  }
}
