import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  group: any = {name: '', paymentAmount: 0};
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const controls = {
      name: [ '', Validators.required],
      paymentAmount: [this.group.paymentAmount || '', Validators.required],
    };
    this.createForm = this.fb.group(controls);
  }
}
