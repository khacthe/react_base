import { combineActions, handleActions } from 'redux-actions';

import {
  loadContactSuccess,
  loadContactError,
} from '../actions/contactAction';

export const initialState = {
  isLoadContactSuccess: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    loadContactSuccess,
    loadContactError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;
