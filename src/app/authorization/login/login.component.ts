import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder , public translate: TranslateService , private authService : AuthService, private router : Router) {
      translate.addLangs(['en', 'ar']);
      translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[ Validators.email,Validators.pattern('.*com$')]],
      password:['',[Validators.minLength(8)]],
    })
  }
  login(){
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!)
      .then(() => {
        this.router.navigate(['/home/homepage'])
      })
      .catch(err => alert('Error: ' + err.message));
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
