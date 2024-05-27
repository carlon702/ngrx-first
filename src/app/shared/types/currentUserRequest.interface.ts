import {CurrentUserInterface} from './currentUser.interface';

export interface CurrenteUserRequestInterface {
  user: CurrentUserInterface & {password: string};
}
