import { combineActions, handleActions } from 'redux-actions';

import {
  getUsers,
  getUsersSuccess,
  getUsersError,
} from '../actions/userAction';

export const initialState = {
  getUsersLoading: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    getUsersSuccess,
    getUsersError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;
