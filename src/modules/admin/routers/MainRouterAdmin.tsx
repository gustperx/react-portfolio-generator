import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/portfolio";
import { Error404 } from "../components";
import { MainLayout } from "../layouts";

export const MainRouterAdmin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </MainLayout>
  );
};
