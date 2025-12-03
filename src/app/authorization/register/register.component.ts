import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../confrim-password.validator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(4)]],
        lastName: ['', [Validators.required, Validators.minLength(4)]],
        userName: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.email, Validators.pattern('.*com$')]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validators: ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  // get firstname() {
  //   return this.registerForm.get('firstname');
  // }
  // get lastname() {
  //   return this.registerForm.get('lastname');
  // }
  // get username() {
  //   return this.registerForm.get('username');
  // }
  // get email() {
  //   return this.registerForm.get('email');
  // }
  // get emailstring() {
  //   let cache: any = [];
  //   return JSON.stringify(this.email, (key, value) => {
  //     if (typeof value === 'object' && value !== null) {
  //       if (cache.includes(value)) return;

  //       cache.push(value);
  //     }
  //     return value;
  //   });
  // }
  // get password() {
  //   return this.registerForm.get('password');
  // }
  // get confirmPassword() {
  //   return this.registerForm.get('confirmpassword');
  // }

  // register() {
  //   console.log(this.registerForm.value);
  // }


  register() {
    if (this.registerForm.invalid) return;

    const { firstName, lastName, userName, email, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    this.authService.signup(this.registerForm.value)
      .then(() => {
        this.router.navigate(['auth/login']);
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          alert("This email is already registered.");
        } else {
          alert(err.message);
        }
      });
    }
}

