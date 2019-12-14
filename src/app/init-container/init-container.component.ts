import { Component, OnInit } from '@angular/core';
import {SignalrService} from '../services/signalr-service/signalr.service';

@Component({
  selector: 'init-container',
  templateUrl: './init-container.component.html',
  styleUrls: ['./init-container.component.css']
})
export class InitContainerComponent implements OnInit {

  constructor(private signalrService: SignalrService) {

  }

  ngOnInit() { }

}
