import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthState {
  isLoggedIn: boolean;
  email: string | null;
  username: string | null;
  id: string | null;
}

const initialAuthState = {
  isLoggedIn: false,
  username: null,
  id: null,
  email: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _authState = new BehaviorSubject<AuthState>(
    initialAuthState
  );

  /* AuthState as an Observable */
  readonly auth$ = this._authState.asObservable();

  /* Observe the isLoggedIn of the auth state */
  readonly isLoggedIn$ = this.auth$.pipe(map(state => state.isLoggedIn));

  constructor(private router: Router) { 
    // Get the user on creation of this service
    Auth.currentAuthenticatedUser().then(
      (user: any) => {
        this.setUser(user);
        
      },
      (_err) => {
        this._authState.next(initialAuthState);
        //this.router.navigate(['/login']);
      }
    );

    // Hub channel auth listens to changes
    Hub.listen('auth', ({payload: {event, data, message}}) => {
      if(event == 'signIn'){
        this.setUser(data);
        console.log(event);
        this.router.navigate(["/home"]);
      } else if(event == 'signOut'){
        console.log(event);
        this.router.navigate(["/login"]);
      } else {
        this._authState.next(initialAuthState);
        this.router.navigate(["/login"]);
      }
    })
  }

  private setUser(user: any){
    if(!user){
      return;
    }

    const {
      attributes: {sub: id, email},
      username
    } = user;

    this._authState.next({isLoggedIn: true, id, username, email});
  }
}
