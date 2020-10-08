import * as filterAction from '../actions/filterActions';

interface state {
  data: any,
  loading: boolean
}

const initialState: state = {
  data: null,
  loading: false
}

export const authReducer = (state = initialState, action: any ) => {
    switch(action.type) {
      case filterAction.SET_FILTER:
        return { 
          ...state,
          data: action.payload.data,
        }
      default:
        return state;
    }
}