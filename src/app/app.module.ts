import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JobRegistrarionComponent } from './job-registrarion/job-registrarion.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [AppComponent, JobRegistrarionComponent, ErrorMessageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
