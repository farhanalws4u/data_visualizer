import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import filterReducer from "./filterReducer";

export const reducers = combineReducers({
  data: dataReducer,
  filters: filterReducer,
});
