import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../shared/auth.service'

import {MdInputModule, MdTabsModule, MdButton} from '@angular/material';

@Component({
  selector: 'goi-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.style.scss']
})
export class AuthComponent implements OnInit {
  usersList: FirebaseObjectObservable<any>;
  user: Observable<firebase.User>;
  public loginForm: FormGroup;
  public signinForm: FormGroup;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private af: AngularFireDatabase ) {

      this.user = this.authService.user;
   }

  ngOnInit() {
    this.generatorForms();
    this.usersList = this.af.object('/usuarios');
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .then( user => this.saveUser(user))
    .catch( err => console.log(err))
  }

  loginWithAnonymous() {
    this.authService.loginWithAnonymous()
    .then( user => this.saveUser(user))
    .catch( err => console.log(err))
  }


  saveUser(user): void {
    console.log(user);
    const id = user.uid || user.user.uid || 0;
     const newUser = {
       'nombre': user.displayName || user.user.displayName ||  'Anónimo',
       'email': user.email || user.user.email || 'anonimo@anonimo.com',
       'photo': user.photoURL || user.user.photoURL || 'default.png'
     }
    const ref = this.af.object('/usuarios/' + id);
    ref.set(newUser);
  }


  generatorForms() {
    this.loginForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, this.mustBeSecurePass]]
    })
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]]
    })
  }

  validarUser() {
   if ( this.signinForm.valid ) {
      this.authService.loginWithEmail(this.signinForm.value.email, this.signinForm.value.pass)
    }
  }

  showErrors(field: string) {
    const control = this.loginForm.get(field);
    return (control.touched || control.dirty ) && !control.valid;
  }

  mustBeSecurePass(control: AbstractControl) {
    const isInvalid = control.value && control.value.length < 5;
    if (isInvalid) {
      return {'debe tener mas de 5 caracteres': true};
    }
    return null;
  }

  getTextError(field: string) {
    const arrayErrors = this.loginForm.get(field).errors;
    return arrayErrors && Object.keys(arrayErrors)[0];
  }

  registrarUser() {
    if ( this.loginForm.valid ) {
      this.authService.createUser(this.loginForm.value.email, this.loginForm.value.pass)
      .then( user => {
        user.displayname = this.loginForm.value.nombre;
        this.saveUser(user)
      })
      .catch( err => console.log(err))
    }
  }

}
