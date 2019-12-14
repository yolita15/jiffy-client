import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitContainerComponent } from './init-container/init-container.component';

const routes: Routes = [
  { path: '', component: InitContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
