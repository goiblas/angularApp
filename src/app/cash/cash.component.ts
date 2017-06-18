import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Operation } from './models/operation';
import { FormTools } from './../shared/form-tools';

@Component({
  selector: 'goi-cash',
  templateUrl: 'cash.component.html',
  styles: []
})
export class CashComponent implements OnInit {
  public operationForm: FormGroup;
  public formTools: FormTools;
  public storage: object[];
  private minDate: Date;
  private today: Date;
  public operation: Operation = {
      date: new Date(Date.now()),
      description: '',
      amount: 0,
      operationType: 1
  }

  // -------------------------------------
  // public operation: Operation = new Operation(
  //   new Date(), 0, 1
  // );

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.today = new Date(Date.now());
    const day =  1000 * 60 * 60 * 24;
    this.minDate = new Date(Date.now() - day * 10);
    this.buildForm();
    this.storage = [];
  }

  buildForm() {
    this.operationForm = this.formBuilder.group({
      date: [
        this.operation.date.toISOString().substring(0, 10),
        [Validators.required, this.mustBeInsideRange(this.minDate, this.today)]
      ],
      description: ['', [Validators.required]],
      amount: [this.operation.amount, [Validators.required, this.mustBePositiveNumber]],
      operationType: [this.operation.operationType]
    });
    this.formTools = new FormTools(this.operationForm);
  }

  sendForm(e){
    console.log('enviado!');
    this.storage.push(this.operationForm.value);
  }

  mustBeInsideRange(minDate: Date, maxDate: Date): ValidatorFn {
    return function(control: AbstractControl){
      const dateControl = new Date(control.value);
      if (dateControl < minDate || dateControl > maxDate) {
        return {'Fuera del rango de fecha': true};
      }
      return null;
    }
  }

  mustBePositiveNumber(control: AbstractControl){
    const isInvalid = control.value && (isNaN(control.value) || control.value < 10);
    if (isInvalid) {
      return {'Debe de ser un número mayor de 10': true};
    }
    // retorno null cuando no hay errores
    return null
  }
}
