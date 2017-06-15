import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Operation } from './operation';

@Component({
  selector: 'goi-cash',
  templateUrl: 'cash.component.html',
  styles: []
})
export class CashComponent implements OnInit {
  public operationForm: FormGroup;
  public operation: Operation = new Operation(
    new Date(), 0, 1
  );

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.operationForm = this.formBuilder.group({
      date: [this.operation.date.toISOString().substring(0, 10), [Validators.required]],
      amount: [this.operation.amount, [Validators.required, this.mustBePositiveNumber]],
      operationType: [this.operation.operationType]
    });
  }

  sendForm(){
    console.log(this.operationForm.value);
  }

  mustBePositiveNumber(control: AbstractControl){
    const isInvalid = control.value && (isNaN(control.value) || control.value < 1);

    if (isInvalid) {
      return {'': true};
    }
    return null
  }
}
