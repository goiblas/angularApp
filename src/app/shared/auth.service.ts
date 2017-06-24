import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public fAuth: AngularFireAuth) {
      this.user = fAuth.authState;
   }

   public createUser(email: string, pass: string) {
     return this.fAuth.auth.createUserWithEmailAndPassword(email, pass);
   }

   public loginWithEmail(email: string, pass: string) {
     return this.fAuth.auth.signInWithEmailAndPassword(email, pass);
   }

   public loginWithGoogle() {
     return this.fAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   public loginWithAnonymous() {
    return this.fAuth.auth.signInAnonymously();
   }

   public logout() {
     return this.fAuth.auth.signOut();
   }

}
