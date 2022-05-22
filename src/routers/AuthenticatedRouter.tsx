import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppState";

interface Props {
  redirectPath?: string;
}

export const AuthenticatedRouter: FC<Props> = ({ redirectPath = "/" }) => {
  const { user } = useAppSelector((state) => state.auth);

  if (user.logged) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
