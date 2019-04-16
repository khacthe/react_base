import { combineActions, handleActions } from 'redux-actions';

import {
  loadAboutSuccess,
  loadAboutError,
} from '../actions/aboutAction';

export const initialState = {
  isLoadAboutSuccess: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    loadAboutSuccess,
    loadAboutError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;
