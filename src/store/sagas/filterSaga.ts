import { put, takeLatest } from 'redux-saga/effects';
import * as filterAction from '../actions/filterActions';

function* filterSaga(action: { type: string, value: string }) {
    yield put({ type: filterAction.SET_FILTER, payload: action.value });
  }


export function* wathFilter() {
    yield takeLatest(filterAction.FILTER_SAGA, filterSaga);
}


