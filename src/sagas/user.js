import { put, call, takeLatest, all } from 'redux-saga/effects';

import {
  getUsers,
  getUsersLoading,
  getUsersSuccess,
  getUsersError,

  getUserDetail,
  getUserDetailLoading,
  getUserDetailError,
  getUserDetailSuccess,

} from '../actions/userAction';
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

export function* getUserDetailSaga({ payload }) {

  try {
    yield put(getUserDetailLoading({ isLoadingGetUserDetail: true }));
    const { data } = yield call([UserApi, UserApi.getUserDetail], payload);
    const { data: repos } = yield call([UserApi, UserApi.getUserRepos], payload);
    yield put(getUserDetailSuccess({data: { ...data, repos: repos }}));
  } catch (error) {
    yield put(getUserDetailError({ error: error.error_code }));
  } finally {
    yield put(getUserDetailLoading({ isLoadingGetUserDetail: false }));
  }
}

export default function* root() {
  yield all([
    takeLatest(getUsers, getUsersSaga),
    takeLatest(getUserDetail, getUserDetailSaga),
  ]);
}

