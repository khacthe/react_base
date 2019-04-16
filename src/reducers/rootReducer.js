import { combineReducers } from 'redux';

import homeReducer from './HomeReducer';
import contactReducer from './ContactReducer';
import aboutReducer from './AboutReducer';

const baseReducer = combineReducers({
  homeReducer,
  contactReducer,
  aboutReducer,
});

const rootReducer = (state, action) => (
  baseReducer(state, action)
);

export default rootReducer;
