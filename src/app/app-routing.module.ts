import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { InitContainerComponent } from './components/init-container/init-container.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import {ChatService} from './services/chat-service/chat.service';
import {SignalrService} from './services/signalr-service/signalr.service';

@Injectable()
export class CanActivateChat implements CanActivate {
  constructor(private chatService: ChatService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.chatService.canActivate() ? true : this.router.parseUrl('/');
  }
}

const routes: Routes = [
  {
    path: '',
    component: InitContainerComponent
  }, {
    path: 'chat',
    component: ChatContainerComponent,
    canActivate: [CanActivateChat]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    SignalrService,
    ChatService
  ]
})
export class AppRoutingModule { }
