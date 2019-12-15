import {Component} from '@angular/core';
import {SignalrService} from '../../services/signalr-service/signalr.service';

@Component({
  selector: 'init-container',
  templateUrl: './init-container.component.html',
  styleUrls: ['./init-container.component.css']
})
export class InitContainerComponent {

  public username = '';

  constructor(private signalrService: SignalrService) {
    this.startConnection();
  }

  private startConnection() {
    this.signalrService.startConnection()
      .then(_ => this.getUsername())
      .catch(_ => alert('Error establishing a connection to the server!'));
  }

  private getUsername() {
    this.signalrService.on('getUsername', username => this.username = username);
    this.signalrService.invoke('getUsername');
  }
}
