import { combineActions, handleActions } from 'redux-actions';

import {
  getUserDetailSuccess,
  getUserDetailError,
} from '../actions/userAction';

export const initialState = {
  getUserDetailLoading: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    getUserDetailSuccess,
    getUserDetailError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;