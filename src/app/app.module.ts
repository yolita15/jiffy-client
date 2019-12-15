import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitContainerComponent } from './components/init-container/init-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbChatModule, NbDialogModule, NbDialogConfig } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { InitComponent } from './components/init/init.component';
import { FormsModule } from '@angular/forms';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ChatComponent } from './components/chat/chat.component';
import { SignalrService } from './services/signalr-service/signalr.service';
import { ChatRequestComponent } from './components/chat-request/chat-request.component';

@NgModule({
  declarations: [
    AppComponent,
    InitContainerComponent,
    InitComponent,
    ChatContainerComponent,
    ChatComponent,
    ChatRequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    NbInputModule,
    NbSpinnerModule,
    NbChatModule
  ],
  entryComponents: [
    ChatRequestComponent
  ],
  providers: [
    SignalrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
