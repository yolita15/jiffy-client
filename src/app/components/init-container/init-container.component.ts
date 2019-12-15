import {Component} from '@angular/core';
import { SignalrService } from 'src/app/services/signalr-service/signalr.service';
import { Router } from '@angular/router';
import {ChatService} from '../../services/chat-service/chat.service';
import {ChatRequestComponent} from '../chat-request/chat-request.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'init-container',
  templateUrl: './init-container.component.html',
  styleUrls: ['./init-container.component.css']
})
export class InitContainerComponent {

  public username = '';

  constructor(private signalrService: SignalrService, private chatService: ChatService, private router: Router, private dialogService: NbDialogService) {
    this.startConnection();
  }

  private startConnection() {
    // connect to backend
    this.signalrService.startConnection()
      .then(_ => this.getUsername())
      .catch(_ => alert('Error establishing a connection to the server!'));
  }

  private getUsername() {
    this.signalrService.on('getUsernameResponse', username => {
      // save new username
      this.username = username;

      this.signalrService.on('startChatRequest', friendUsername => {

        this.dialogService.open(ChatRequestComponent, {
          context: {
            username: friendUsername
          },
          closeOnBackdropClick: false,
          closeOnEsc: false
        }).onClose.subscribe(confirmation =>  {

          if (confirmation) {
            this.chatService.setupRTC(friendUsername, true);

            // accept incoming chat
            this.signalrService.invoke('acceptChatRequest', friendUsername);

            // stop listening for requests
            this.signalrService.off('startChatRequest');
            this.signalrService.off('startChatAccepted');
            this.signalrService.off('getUsernameResponse');

            // redirect to chat when accepted
            this.router.navigate(['/chat']);
          }
        });
      });
    });

    // get new username
    this.signalrService.invoke('getUsernameRequest');
  }

  public startChat(friendUsername) {
    this.signalrService.on('startChatAccepted', _ => {

      this.chatService.setupRTC(friendUsername, false);

      // redirect to chat when friend accepted
      this.router.navigate(['/chat']);
    });
    // send a chat start to a friend
    this.signalrService.invoke('startChatRequest', friendUsername);
  }
}
