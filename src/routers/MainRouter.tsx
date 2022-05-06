import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainRouterAuth } from "../modules/auth/routers";
import { MainRouterAdmin } from "../modules/admin/routers";
import { ProtectedRouter, AuthenticatedRouter } from "./index";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthenticatedRouter redirectPath="/admin" />}>
          <Route path="/*" element={<MainRouterAuth />}></Route>
        </Route>

        {/* Admin routes */}
        <Route element={<ProtectedRouter />}>
          <Route path="/admin/*" element={<MainRouterAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
