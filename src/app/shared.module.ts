import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatCardModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class SharedModule { }
