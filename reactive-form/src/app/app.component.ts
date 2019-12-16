import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var NgForm: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  title = 'Reactive form validation in Angular 8!';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      tnc: ['', Validators.required]
    });

    console.log(this.fval);
  }

  get fval() {
    return this.registerForm.controls;
  }

  signup() {
    console.log('clicked : ', this.fval);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    alert('form fields are validated succe3ssfully!!!!!ng ');
  }
}
