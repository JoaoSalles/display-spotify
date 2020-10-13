import { put, takeLatest } from "redux-saga/effects";
import * as auth from "../actions/authActions";

function* loginSage(action: {
  type: string;
  urlQueries: { access_token: string; expires_in: string };
}) {
  yield put({ type: auth.LOADING, payload: {} });
  yield put({ type: auth.LOGGIN, payload: action.urlQueries });
}

function* logoutSage() {
  yield put({ type: auth.LOADING, payload: {} });
  yield put({ type: auth.LOGOUT, payload: {} });
}

export function* wathAuth() {
  yield takeLatest(auth.LOGGIN_SAGA, loginSage);
  yield takeLatest(auth.LOGGOUT_SAGA, logoutSage);
}
