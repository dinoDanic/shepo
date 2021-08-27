import { uiActionTypes } from "./ui.types";

export const toggleUi = (state) => ({
  type: uiActionTypes.TOGGLE_UI,
  payload: state,
});
