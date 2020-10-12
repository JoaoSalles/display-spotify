import * as auth from '../actions/authActions';

interface state {
  access_token: string | null,
  expires_in: string | null,
  loading: boolean
}

const initialState: state = {
  access_token: null,
  expires_in: null,
  loading: false
}

export const authReducer = (state = initialState, action: any ) => {
    switch(action.type) {
      case auth.LOGGIN:
        return { 
          ...state,
          access_token: action.payload.access_token,
          expires_in: action.payload.expires_in
        }
      case auth.LOGOUT:
        return { 
          ...state,
          access_token: null,
          expires_in: null
        }
      default:
        return state;
    }
}