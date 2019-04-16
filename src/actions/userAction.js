import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  getUsers,
  getUsersSuccess,
  getUsersError,
  getUsersLoading,

  getUserDetail,
  getUserDetailSuccess,
  getUserDetailError,
  getUserDetailLoading,

  getUserRepos,
  getUserReposSuccess,
  getUserReposError,
  getUserReposLoading,
} = createActions({
  [ActionsTypes.GET_USERS]: payload => payload,
  [ActionsTypes.GET_USERS_SUCCESS]: payload => payload,
  [ActionsTypes.GET_USERS_ERROR]: payload => payload,
  [ActionsTypes.GET_USERS_LOADING]: payload => payload,

  [ActionsTypes.GET_USER_DETAIL]: payload => payload,
  [ActionsTypes.GET_USER_DETAIL_SUCCESS]: payload => payload,
  [ActionsTypes.GET_USER_DETAIL_ERROR]: payload => payload,
  [ActionsTypes.GET_USER_DETAIL_LOADING]: payload => payload,

  [ActionsTypes.GET_USER_REPOS]: payload => payload,
  [ActionsTypes.GET_USER_REPOS_SUCCESS]: payload => payload,
  [ActionsTypes.GET_USER_REPOS_ERROR]: payload => payload,
  [ActionsTypes.GET_USER_REPOS_LOADING]: payload => payload,
});
