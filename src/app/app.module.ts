import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { FormsModule } from '@angular/forms';
import { JobRegistrarionComponent } from './job-registrarion/job-registrarion.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDriveFormComponent,
    JobRegistrarionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
