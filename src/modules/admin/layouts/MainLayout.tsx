import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../components/ui";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-auto container mx-4 md:mx-auto mt-12 mb-12">
        {children}
      </div>

      <Footer />
    </div>
  );
};
