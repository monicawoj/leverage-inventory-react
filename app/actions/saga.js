import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_USER } from './constants';
import getApiUrl from './api';
import request from 'utils/request';
import {
  userLoaded,
  userLoadingError
} from './actionCreators';

// worker saga that performs the task
export function* getUser(action) {
  const requestUrl = getApiUrl(action.id);
  console.log(requestUrl);
  try {
    const data = yield call(request, requestUrl);
    yield put(userLoaded(data));
  } catch (error) {
    yield put(userLoadingError(error));
  }
}

// watcher saga
export default function* watchGetUser() {
  yield takeLatest(GET_USER, getUser);
}
