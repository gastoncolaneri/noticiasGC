import { useReducer } from "react";
import userReducer, { userInitialState } from "./userReducer";
import { USER_LOGIN, USER_LOGOUT } from "../types";
import { setUserLoggedLS } from "../../utils/localStorage";

const UserActions = () => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const userLogin = (isUserLogged) => {
    setUserLoggedLS(isUserLogged);
    dispatch({
      type: USER_LOGIN,
      payload: isUserLogged,
    });
  };

  const userLogout = (isUserLogged) => {
    setUserLoggedLS(isUserLogged);
    dispatch({
      type: USER_LOGOUT,
      payload: isUserLogged,
    });
  };
  return { isUserLogged: state.isUserLogged, userLogin, userLogout };
};

export default UserActions;
