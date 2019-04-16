import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  getUsers,
  getUsersSuccess,
  getUsersError,
  getUsersLoading,
} = createActions({
  [ActionsTypes.GET_USERS]: payload => payload,
  [ActionsTypes.GET_USERS_SUCCESS]: payload => payload,
  [ActionsTypes.GET_USERS_ERROR]: payload => payload,
  [ActionsTypes.GET_USERS_LOADING]: payload => payload,
});
