import { isUserLoggedLS } from "../../utils/localStorage";
import { USER_LOGIN, USER_LOGOUT } from "../types";

export const userInitialState = {
  isUserLogged: isUserLoggedLS(),
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return { ...state, isUserLogged: payload };
    case USER_LOGOUT:
      return { ...state, isUserLogged: payload };
    default:
      return state;
  }
};

export default userReducer;
