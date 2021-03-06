import keyMirror from 'fbjs/lib/keyMirror';

export const ActionsTypes = keyMirror({
  LOAD_DATA: undefined,
  LOAD_DATA_SUCCESS: undefined,
  LOAD_DATA_ERROR: undefined,
  LOAD_DATA_LOADING: undefined,

  LOAD_ABOUT: undefined,
  LOAD_ABOUT_SUCCESS: undefined,
  LOAD_ABOUT_ERROR: undefined,
  LOAD_ABOUT_LOADING: undefined,

  LOAD_CONTACT: undefined,
  LOAD_CONTACT_SUCCESS: undefined,
  LOAD_CONTACT_ERROR: undefined,
  LOAD_CONTACT_LOADING: undefined,

  GET_USERS: undefined,
  GET_USERS_SUCCESS: undefined,
  GET_USERS_ERROR: undefined,
  GET_USERS_LOADING: undefined,

  GET_USER_DETAIL: undefined,
  GET_USER_DETAIL_SUCCESS: undefined,
  GET_USER_DETAIL_ERROR: undefined,
  GET_USER_DETAIL_LOADING: undefined,

  GET_USER_REPOS: undefined,
  GET_USER_REPOS_SUCCESS: undefined,
  GET_USER_REPOS_ERROR: undefined,
  GET_USER_REPOS_LOADING: undefined,
});
