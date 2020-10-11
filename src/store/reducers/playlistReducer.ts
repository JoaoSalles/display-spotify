import * as playlistActions from '../actions/playlistActions';

interface state {
  playlist: [],
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