import { put, takeLatest, call } from 'redux-saga/effects';
import * as playlistActions from '../actions/playlistActions';

function* fetchPlaylist(url: string, token: string) {
  const playlists = yield fetch(url, 
    { 
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization': `Bearer ${token}`
    },
  });
  return playlists
}

function* filterSaga(action: { type: string, payload: { token: string, url: string } }) {
  const responde = yield call(fetchPlaylist, action.payload.url, action.payload.token );

  let jsonResponse =  yield call([responde, 'json']);

  yield put({ type: playlistActions.SET_PLAYLIST, payload: jsonResponse.playlists.items });
  }


export function* wathPlaylist() {
    yield takeLatest(playlistActions.PLAYLIST_SAGA, filterSaga);
}


