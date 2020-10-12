import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as playlistActions from '../actions/playlistActions';
import * as authActions from '../actions/authActions';

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
  const responde = yield call(fetchPlaylist, action.payload.url, action.payload.token);
  let jsonResponse = yield call([responde, 'json']);
  if (responde.status === 200) {

    yield put({ type: playlistActions.SET_PLAYLIST, payload: jsonResponse.playlists.items });
  } else {
    toast.error(jsonResponse.error.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (responde.status === 401) {
    yield put({ type: authActions.LOGGOUT_SAGA, payload: {} });
  }
}


export function* wathPlaylist() {
  yield takeLatest(playlistActions.PLAYLIST_SAGA, filterSaga);
}


