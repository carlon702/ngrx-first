import {createActionGroup, props} from '@ngrx/store';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {LoginRequestInterface} from '../types/loginRequest.interface';

// export const register = createAction("[Auth] Register", props<{request: RegisterRequestInterface}>())

// export const registerSuccess = createAction("[Auth] Register Success", props<{request: RegisterRequestInterface}>())

// export const registerFailure = createAction("[Auth] Register Failure", props<{request: RegisterRequestInterface}>())

//Syntax for grouping actions = less code
export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{request: RegisterRequestInterface}>(),
    'Register Success': props<{currentUser: CurrentUserInterface}>(),
    'Register Failure': props<{errors: BackendErrorsInterface}>(),

    Login: props<{request: LoginRequestInterface}>(),
    'Login Success': props<{currentUser: CurrentUserInterface}>(),
    'Login Failure': props<{errors: BackendErrorsInterface}>(),
  },
});
