import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [GroupComponent, CreateComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModule
  ]
})
export class GroupModule { }
