import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';

@NgModule({
  declarations: [AppComponent, ConfirmEqualValidatorDirective],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
