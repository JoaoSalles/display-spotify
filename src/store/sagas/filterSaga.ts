import { put, takeLatest, call } from 'redux-saga/effects';
import * as filterAction from '../actions/filterActions';

function fetchFilterData () {
    return fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776').then(response => (
        (response.status === 200) ? response.json() : Promise.reject('filter')
    ));
}

function* filterSaga() {
    const filterData = yield call(fetchFilterData)
    console.log(filterData);
    yield put({ type: filterAction.SET_FILTER, payload: filterData});
  }


export function* wathAuth() {
    yield takeLatest(filterAction.FILTER_SAGE, filterSaga);
}


