import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [GroupComponent, CreateComponent],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
