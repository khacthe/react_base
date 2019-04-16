import { put, call, takeLatest, all } from 'redux-saga/effects';

import { getUsers, getUsersLoading, getUsersSuccess, getUsersError } from '../actions/userAction';
import { UserApi } from '../services/restClient/user';
// import getDataRequest from '../utils/dataRquest';

export function* getUsersSaga({ payload }) {
  // const dataRquest = getDataRequest(payload);

  try {
    yield put(getUsersLoading({ isLoadingGetUsersList: true }));
    const { data } = yield call([UserApi, UserApi.getUsers]);
    yield put(getUsersSuccess({data}));

  } catch (error) {
    yield put(getUsersError({ error: error.error_code }));
  } finally {
    yield put(getUsersLoading({ isLoadingGetUsersList: false }));
  }
}

export default function* root() {
  yield all([
    takeLatest(getUsers, getUsersSaga),
  ]);
}

