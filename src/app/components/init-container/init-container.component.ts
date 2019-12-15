import {Component} from '@angular/core';
import { SignalrService } from 'src/app/services/signalr-service/signalr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'init-container',
  templateUrl: './init-container.component.html',
  styleUrls: ['./init-container.component.css']
})
export class InitContainerComponent {

  public username = '';
  public friendUsername = '';

  constructor(private signalrService: SignalrService, private router: Router) {
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

       if (this.friendUsername === '') {
         // accept incoming chat
         this.signalrService.invoke('acceptChatRequest', friendUsername);

         // stop listening for chat requests
         this.signalrService.off('startChatRequest');

         // redirect to chat when accepted
         this.router.navigate(['/chat']);
       }
      });
    });

    // get new username
    this.signalrService.invoke('getUsernameRequest');
  }

  public startChat(friendUsername) {
    this.signalrService.on('startChatAccepted', _ => {
      // redirect to chat when friend accepted
      this.router.navigate(['/chat']);
    });
    // send a chat start to a friend
    this.signalrService.invoke('startChatRequest', friendUsername);
  }
}
