import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitContainerComponent } from './init-container/init-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { InitComponent } from './init/init.component';
import { FormsModule } from '@angular/forms';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatComponent } from './chat/chat.component';
import {SignalrService} from './services/signalr-service/signalr.service';

@NgModule({
  declarations: [
    AppComponent,
    InitContainerComponent,
    InitComponent,
    ChatContainerComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    NbInputModule,
    NbSpinnerModule,
    NbChatModule
  ],
  providers: [
    SignalrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
