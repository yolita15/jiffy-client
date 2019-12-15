import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitContainerComponent } from './components/init-container/init-container.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';

const routes: Routes = [
  { path: '', component: InitContainerComponent },
  { path: 'chat', component: ChatContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
