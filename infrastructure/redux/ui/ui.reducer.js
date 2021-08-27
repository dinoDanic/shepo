import { uiActionTypes } from "./ui.types";

const INITIAL_STATE = {
  openUi: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiActionTypes.TOGGLE_UI:
      return {
        ...state,
        openUi: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
