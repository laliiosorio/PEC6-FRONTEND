import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static nameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
    const name = control.value;
    if (forbiddenNames.includes(name)) {
      return { 'invalidName': true };
    }
    return null;
  }
}
