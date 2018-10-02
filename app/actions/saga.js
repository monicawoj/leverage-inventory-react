import { call, put, select, takeLatest } from 'redux-saga/effects';
// import constants
// import api information
// import action creator functions from index

// worker saga that performs the task
export function* workerSaga(action) {

  // try {
  //
  // } catch (error) {
  //
  // }
}

// watcher saga that watches for an action and executes worker saga on said action
export default function* watcherSaga() {
  yield takeLatest(ACTION_NAME, workerSaga);
}
