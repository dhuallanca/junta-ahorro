import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'group-list',
    pathMatch: 'full'
  },
  {
    path: 'group-list',
    loadChildren: () => import('./group/group.module').then(mod => mod.GroupModule)
  },
  {
    path: 'payment-list/:idGroup',
    loadChildren: () => import('./payment/payment.module').then(mod => mod.PaymentModule)
  }

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
