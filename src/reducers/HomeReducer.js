import { combineActions, handleActions } from 'redux-actions';

import {
  loadDataSuccess,
  loadDataError,
} from '../actions/homeAction';

export const initialState = {
  isLoadDataSuccess: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    loadDataSuccess,
    loadDataError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;
