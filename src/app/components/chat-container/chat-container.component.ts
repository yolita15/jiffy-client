import { Component } from '@angular/core';
import {SignalrService} from '../../services/signalr-service/signalr.service';
import {ChatService} from '../../services/chat-service/chat.service';

@Component({
  selector: 'chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent {

  messages: any[] = [];

  constructor(private chatService: ChatService) {
    chatService.newMessage.subscribe(message => {
      this.messages.push(message);
    });
  }

  onSendMessage(messageText) {
    const message = {
      text: messageText,
      reply: true
    };

    this.messages.push(message);

    this.chatService.sendMessage({
      ...message,
      reply: false
    });
  }
}
