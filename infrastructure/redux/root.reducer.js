import { combineReducers } from "redux";
import uiReducer from "./ui/ui.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
});

export default rootReducer;
