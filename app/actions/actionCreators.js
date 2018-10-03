import {
  GET_USER,
  CHANGE_VIEW,
  USER_LOADED,
  USER_LOADING_ERROR
} from './constants';

export const getUser = (id) => ({
  type: GET_USER,
  id
});

export const changeView = () => ({
  type: CHANGE_VIEW
});

export const userLoaded = (data) => ({
  type: USER_LOADED,
  data
});

export const userLoadingError = (error) => ({
  type: USER_LOADING_ERROR,
  error
});
