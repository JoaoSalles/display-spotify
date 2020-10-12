import * as playlistActions from '../actions/playlistActions';

export type Playlist = {
  name: string,
  description: string,
  external_urls: { spotify: string },
  images: Array<{url: string}>,
  tracks: { total: number },
  id?: string
}

interface state {
  playlist: Array<Playlist>,
}

const initialState: state = {
  playlist: [],
}

export const playlistReducer = (state = initialState, action: any ) => {
    switch(action.type) {
      case playlistActions.SET_PLAYLIST:
        return { 
          ...state,
          playlist: action.payload,
        }
      default:
        return state;
    }
}