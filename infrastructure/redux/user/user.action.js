import userActionType from "./user.type";

export const setCurrentUser = (userData) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: userData,
});
