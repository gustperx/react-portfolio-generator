import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { MainRouter } from "./routers/MainRouter";
import { onAuthState } from "./firebase/auth";

import { useAppDispatch } from "./hooks/useAppState";
import { login, logout } from "./store/slices/auth";

const auth = getAuth();
export const MainApp = () => {
  const dispapch = useAppDispatch();

  const authCallback = (user: any) => {
    if (user) {
      dispapch(
        login({
          name: user.displayName,
          email: user.email,
          logged: true,
        })
      );
    } else {
      dispapch(logout());
    }
  };

  useEffect(() => {
    onAuthState(authCallback);
  }, [auth]);

  return <MainRouter />;
};
