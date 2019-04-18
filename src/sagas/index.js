import { all, fork } from 'redux-saga/effects';

import userSaga from './user';

export default function* root() {
  yield all([
    fork(userSaga),
  ]);
}