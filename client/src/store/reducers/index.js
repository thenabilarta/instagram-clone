import { combineReducers } from "redux";
import pageReducer from "./page";

const RootReducer = combineReducers({
  page: pageReducer,
});

export default RootReducer;
