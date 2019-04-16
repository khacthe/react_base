import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  loadData,
  loadDataSuccess,
  loadDataError,
} = createActions({
  [ActionsTypes.LOAD_DATA]: payload => payload,
  [ActionsTypes.LOAD_DATA_SUCCESS]: payload => payload,
  [ActionsTypes.LOAD_DATA_ERROR]: payload => payload,
});
