import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-registrarion',
  templateUrl: './job-registrarion.component.html',
  styleUrl: './job-registrarion.component.css',
})
export class JobRegistrarionComponent {
  onSubmit(ngForm: NgForm) {
    console.log(ngForm.form.controls);
  }
}
