import { Injectable } from '@angular/core';
import {SignalrService} from '../signalr-service/signalr.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private friendUsername = '';

  private starter = false;

  private stunServers = {
    iceServers: [
      { urls: ['stun:stun.l.google.com:19302'] }
    ]
  };

  private rtcPeerConnection: RTCPeerConnection = null;

  private dataChannel: RTCDataChannel = null;

  public newMessage = new Subject<any>();

  public canActivate = () => this.friendUsername.length > 0;

  constructor(private signalrService: SignalrService) { }

  public setupRTC(friendUsername: string, starter: boolean) {
    this.friendUsername = friendUsername;
    this.starter = starter;
    this.rtcPeerConnection = new RTCPeerConnection(this.stunServers);

    this.setupSdpListener();
    this.setupDataChannel();
    this.setupIceCandidates();
  }

  private setupIceCandidates() {
    this.signalrService.on('iceCandidate', candidate => {
      this.rtcPeerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(candidate)))
        .catch(error => console.error(error));
    });
    this.rtcPeerConnection.onicecandidate = event => {
      if (event.candidate) {
        this.signalrService.invoke('iceCandidate', this.friendUsername, JSON.stringify(event.candidate));
      }
    };
  }

  private setupDataChannel() {
    if (this.starter) {
      this.rtcPeerConnection.onnegotiationneeded = () => {
        this.rtcPeerConnection.createOffer()
          .then(_ => this.localDescriptionCreated(_))
          .catch(error => console.error(error));
      };
      this.dataChannel = this.rtcPeerConnection.createDataChannel('jiffy');
      this.setupOnMessage();
    } else {
      this.rtcPeerConnection.ondatachannel = event => {
        this.dataChannel = event.channel;
        this.setupOnMessage();
      };
    }
  }

  private setupOnMessage() {
    this.dataChannel.onmessage = event => this.newMessage.next(JSON.parse(event.data));
  }

  private localDescriptionCreated(description) {
    this.rtcPeerConnection.setLocalDescription(description)
      .then(_ => {
        this.signalrService.invoke('sdp', this.friendUsername, JSON.stringify(this.rtcPeerConnection.localDescription));
      })
      .catch(error => console.error(error));
  }

  private setupSdpListener() {
    this.signalrService.on('sdp', sdp => {
      this.rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(JSON.parse(sdp)))
        .then(_ => {
          if (this.rtcPeerConnection.remoteDescription.type === 'offer') {
            this.rtcPeerConnection.createAnswer()
              .then(_ => this.localDescriptionCreated(_))
              .catch(error => console.error(error));
          }
        })
        .catch(error => console.error(error));
    });
  }

  public sendMessage(message: any) {
    this.dataChannel.send(JSON.stringify(message));
  }
}
