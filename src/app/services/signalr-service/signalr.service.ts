import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder} from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConnection: HubConnection;

  public startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://api.jiffy.kaloyanmanev.com/jiffy')
      .build();

    return this.hubConnection.start();
  }

  public invoke(command: string, ...args) {
    this.hubConnection
      .invoke(command, ...args)
      .catch(_ => {
        console.log(_);
        alert('Error!');
      });
  }

  public on(event: string, callback) {
    this.hubConnection.on(event, data => callback(data));
  }

  public off(event: string) {
    return this.hubConnection.off(event);
  }
}
