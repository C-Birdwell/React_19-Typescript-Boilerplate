import { BrowserRouter } from "react-router-dom";

import { Header, Footer } from "@/components";
import { headerCLS, footerCLS } from "@/constants";

import { PagesRoutes } from "./PagesRoutes";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Header className={headerCLS} />
      <PagesRoutes />
      <Footer className={footerCLS} />
    </BrowserRouter>
  );
};
