import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-registrarion',
  templateUrl: './job-registrarion.component.html',
  styleUrl: './job-registrarion.component.css',
})
export class JobRegistrarionComponent {
  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    console.log(ngForm.value);
    // logs value
    console.log(ngForm.value.name);
    console.log(ngForm.controls['name'].value);
    // sets Value dynamically
    ngForm.controls['name'].setValue('giorgi');
  }
}
