import { FormGroup, AbstractControl } from '@angular/forms';

export class FormTools {

    constructor( public formGroup: FormGroup) { }

    hasErrorToShow(field: string) {
        const control = this.getControl(field);
        return control && control.invalid && this.shouldBeValid(control);
    }

    shouldBeValid(control) {
        return ( control.touched || control.dirty);
    }

    showErrors(field) {
        const control = this.getControl(field);
        return control && control.errors;
    }

    getControl(field): AbstractControl {
        return this.formGroup.get(field);
    }
}
