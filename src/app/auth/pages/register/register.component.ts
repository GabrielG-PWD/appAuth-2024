import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  myForm: FormGroup = this.fb.group({
    name: ['test-1', [Validators.required, Validators.minLength(3)]],
    email: ['test-1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  register() {
    console.log(this.myForm.value, this.myForm.valid);
    this.router.navigateByUrl('/dashboard')
  }
}
