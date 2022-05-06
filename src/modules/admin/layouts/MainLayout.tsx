import { FC, ReactNode } from "react";
import { signOutFirebase } from "../../../firebase/helpers/auth";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <h4>Main Layout</h4>

      <button type="button" onClick={() => signOutFirebase()}>
        Cerrar sesion
      </button>

      {children}
    </>
  );
};
