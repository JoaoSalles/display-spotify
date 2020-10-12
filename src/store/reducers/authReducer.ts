import * as auth from '../actions/authActions';
import * as status from 'constants/utils/status';

interface state {
  access_token: string | null,
  expires_in: string | null,
  status: string,
}

const initialState: state = {
  access_token: null,
  expires_in: null,
  status: status.PEDDING
}

export const authReducer = (state = initialState, action: any) => {
  console.log("action", action);
  switch (action.type) {
    case auth.LOADING:
      return {
        ...state,
        status: status.LOADING
      }
    case auth.LOGGIN:
      return {
        ...state,
        access_token: action.payload.access_token,
        expires_in: action.payload.expires_in,
        status: status.LOADED
      }
    case auth.LOGOUT:
      return {
        ...state,
        access_token: "",
        expires_in: null,
        status: status.LOADED
      }
    default:
      return state;
  }
}