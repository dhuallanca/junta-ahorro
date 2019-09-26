import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { CreateComponent } from './create/create.component';



const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [  {
      path: 'create',
      component: CreateComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
