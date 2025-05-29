import { BrowserRouter } from "react-router-dom";

import { Header, Footer, Modal } from "@/components";
import { headerCLS, footerCLS } from "@/constants";

import { PagesRoutes } from "./PagesRoutes";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Modal />
      <Header className={headerCLS} />
      <PagesRoutes />
      <Footer className={footerCLS} />
    </BrowserRouter>
  );
};
