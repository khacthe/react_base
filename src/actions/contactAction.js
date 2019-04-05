import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  loadContact,
  loadContactSuccess,
  loadContactError,
} = createActions({
  [ActionsTypes.LOAD_CONTACT]: payload => payload,
  [ActionsTypes.LOAD_CONTACT_SUCCESS]: payload => payload,
  [ActionsTypes.LOAD_CONTACT_ERROR]: payload => payload,
});
