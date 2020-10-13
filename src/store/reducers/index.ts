import { combineReducers } from "redux";
import { authReducer as auth } from "./authReducer";
import { searchReducer as search } from "./searchReducer";
import { playlistReducer as playlist } from "./playlistReducer";

const rootReducer = combineReducers({
  auth,
  search,
  playlist,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
