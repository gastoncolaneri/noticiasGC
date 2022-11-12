import UserContext from "./UserContext";
import UserActions from "./UserActions";

const UserState = (props) => {
  const { isUserLogged, userLogin, userLogout } = UserActions();

  const value = { isUserLogged, userLogin, userLogout };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
