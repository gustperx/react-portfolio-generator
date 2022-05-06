import { Route, Routes } from "react-router-dom";
import { CreatePage, EditPage, HomePage } from "../pages/portfolio";
import { Error404 } from "../components";
import { MainLayout } from "../layouts/MainLayout";

export const MainRouterAdmin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="create" element={<CreatePage />}></Route>
        <Route path="edit/:productId" element={<EditPage />}></Route>

        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </MainLayout>
  );
};
