import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  myForm: FormGroup = this.fb.group({
    email: ['test-1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder) { }

  login() {
    console.log(this.myForm.value, this.myForm.valid)
  }
}
