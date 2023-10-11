import { combineReducers } from "redux";
import postsReducer from "./reducers/postsSlice";

const rootReducer = combineReducers({
  postsReducer,
});

export default rootReducer;
