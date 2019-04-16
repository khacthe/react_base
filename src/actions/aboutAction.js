import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  loadAbout,
  loadAboutSuccess,
  loadAboutError,
} = createActions({
  [ActionsTypes.LOAD_ABOUT]: payload => payload,
  [ActionsTypes.LOAD_ABOUT_SUCCESS]: payload => payload,
  [ActionsTypes.LOAD_ABOUT_ERROR]: payload => payload,
});
