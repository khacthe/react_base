import { createStore } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // Merge 2 level state

import rootReducer from '../reducers/rootReducer';

const persistConfig = {
  key: 'app',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  transforms: [createTransform(
    (inboundState) => ({ ...inboundState, error: '' }),
    (outboundState) => ({ ...outboundState, error: '' }),
    { whitelist: ['auth'] }
  )],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const configureStore = (initialState = {}) => {
  const store  = createStore(
    pReducer,
    initialState,
    process.env.NODE_ENV === 'development' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f,
	);
  persistStore(store);
  return store;
}

export default configureStore();
