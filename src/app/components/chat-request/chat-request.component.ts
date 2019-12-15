import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'chat-request-component',
  templateUrl: './chat-request.component.html',
  styleUrls: ['./chat-request.component.css']
})
export class ChatRequestComponent implements OnInit {

  @Input() username: string;
  
  constructor(protected ref: NbDialogRef<ChatRequestComponent>) { }

  ngOnInit() {
  }

  accept() {
    this.ref.close(true);
  }

  dismiss() {
    this.ref.close(false);
  }

}
