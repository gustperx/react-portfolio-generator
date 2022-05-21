import { Route, Routes } from "react-router-dom";
import { CreatePage, EditPage, HomePage } from "../pages/portfolio";
import { MainLayout } from "../components/layouts";
import { Error404 } from "../components";

export const MainRouterAdmin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Portfolio */}
        <Route path="/portfolios" element={<HomePage />} />
        <Route path="/portfolios/create" element={<CreatePage />} />
        <Route path="/portfolios/:portfolioId/edit" element={<EditPage />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </MainLayout>
  );
};