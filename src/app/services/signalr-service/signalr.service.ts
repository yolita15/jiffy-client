import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder} from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConnection: HubConnection;

  public startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:1337/jiffy')
      .build();

    return this.hubConnection.start();
  }

  public invoke(command: string, ...args) {
    this.hubConnection
      .invoke(command, ...args)
      .catch(_ => alert('Error!'));
  }

  public on(event: string, callback) {
    this.hubConnection.on(event, data => callback(data));
  }
}
