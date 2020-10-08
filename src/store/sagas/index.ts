import { all } from 'redux-saga/effects';
import { wathAuth } from './authSaga';

export default function* rootSaga() {
    yield all([
        wathAuth(),
    ])
  }