import * as filterAction from "../actions/filterActions";

interface state {
  searchFilter: string;
}

const initialState: state = {
  searchFilter: "",
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case filterAction.SET_FILTER:
      return {
        ...state,
        searchFilter: action.payload,
      };
    default:
      return state;
  }
};
