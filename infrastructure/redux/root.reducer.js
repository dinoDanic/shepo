import { combineReducers } from "redux";
import uiReducer from "./ui/ui.reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
