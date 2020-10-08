import { put, takeLatest } from 'redux-saga/effects';
import * as auth from '../actions/authActions';

function* loginSage(action: { type: string, urlQueries: { access_token: string, expires_in: string } }) {
    yield put({ type: auth.LOGGIN,  payload: action.urlQueries})
  }


export function* wathAuth() {
    yield takeLatest(auth.LOGGIN_SAGA, loginSage);
}


