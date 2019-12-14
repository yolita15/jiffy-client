import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitContainerComponent } from './init-container/init-container.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';

const routes: Routes = [
  { path: '', component: InitContainerComponent },
  { path: 'chat', component: ChatContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
