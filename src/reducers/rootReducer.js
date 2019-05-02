import { combineReducers } from 'redux';

import homeReducer from './HomeReducer';
import contactReducer from './ContactReducer';
import aboutReducer from './AboutReducer';
import userDetailReducer from './userDetailReducer';

const baseReducer = combineReducers({
  homeReducer,
  contactReducer,
  aboutReducer,
  userDetailReducer,
});

const rootReducer = (state, action) => (
  baseReducer(state, action)
);

export default rootReducer;
