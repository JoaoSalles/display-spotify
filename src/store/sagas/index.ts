import { all } from 'redux-saga/effects';
import { wathAuth } from './authSaga';
import { wathFilter } from './filterSaga';
import { wathPlaylist } from './playlistSaga';

export default function* rootSaga() {
    yield all([
        wathAuth(),
        wathFilter(),
        wathPlaylist()
    ])
  }