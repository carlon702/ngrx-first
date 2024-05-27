import {createFeature, createReducer, on} from '@ngrx/store';
import {authActions} from 'src/app/auth/store/actions';
import {SettingStateInterface} from '../types/settingsState.interface';
import {routerNavigationAction} from '@ngrx/router-store';

const initialState: SettingStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,
    on(authActions.updateCurrentUser, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(authActions.updateCurrentUserFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialState),
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectValidationErrors,
  selectIsSubmitting,
} = settingFeature;
