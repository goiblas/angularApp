import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormTools } from './../form-tools';

@Component({
  selector: 'goi-input',
  template: `
      <div [formGroup]="form">
       <label>{{label}}

            <div *ngIf="type === 'textarea'; then textarea; else other"></div>
            <ng-template #textarea>
              <textarea [formControlName]="field"></textarea>
            </ng-template>
            <ng-template #other>
              <input [type]="type" [formControlName]="field">
            </ng-template>
            <div class="error" *ngIf="showError(field)">
                {{ textError }}
            </div>

        </label>
        </div>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  @Input() field: string;
  @Input() type: string;
  @Input() label: string;
  @Input() form: FormGroup;

  textError: string;
  constructor( ) { }

  ngOnInit() {
  }

  getTextError() {
    const error = this.form.get(this.field).errors;
    return error && Object.keys(error)[0];
  }

  showError() {
    const ncontrol = this.form.get(this.field);
    this.textError = this.getTextError();
    return (ncontrol.touched || ncontrol.dirty ) && !ncontrol.valid;
  }

}
