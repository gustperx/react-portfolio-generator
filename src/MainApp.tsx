import { useState, useMemo, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { AuthContext, IAuthContext } from "./context/AuthContext";
import { MainRouter } from "./routers/MainRouter";
import { onAuthState } from "./firebase/helpers/auth";
import { Provider } from "react-redux";
import { store } from "./store";

const auth = getAuth();
export const MainApp = () => {
  const [user, setUser] = useState<IAuthContext>({ logged: false });

  const userCallback = (user: any) => {
    if (user) {
      console.log("OK - authenticated");
      setUser({
        name: user.displayName,
        email: user.email,
        logged: true,
      });
    } else {
      console.log("NOT - unauthenticated");
      setUser({ logged: false });
    }
  };

  useEffect(() => {
    onAuthState(userCallback)
  }, [auth])
  

  return (
    <Provider store={store}>
      <AuthContext.Provider value={user}>
        <MainRouter />
      </AuthContext.Provider>
    </Provider>
  );
};
