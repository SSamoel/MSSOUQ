import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private fireAuth: AngularFireAuth) {}


  signup(user :{firstName:string, lastName:string ,userName: string ,email: string, password: string , confirmPassword: string}) {
    return this.fireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.signOut();
  }}
