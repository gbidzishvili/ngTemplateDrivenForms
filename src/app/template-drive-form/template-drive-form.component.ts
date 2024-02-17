import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrl: './template-drive-form.component.css',
})
export class TemplateDriveFormComponent {
  onFormSubmit(form: NgForm) {
    console.log(form);
    // console.log(form.controls['id'].errors.pattern);
    console.log(form.controls['email']?.errors?.['required']);
    form.reset();
  }
  setDefaultValue(form: NgForm) {
    // form.controls['name'].setValue('giorgi');
    form.controls['surName'].setValue('bidzishvili');
    console.log(form);
    console.log(form.controls['name'].value);
  }
}
