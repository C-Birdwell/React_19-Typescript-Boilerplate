import { BrowserRouter } from "react-router-dom";

import { Header, Footer } from "@/components";
import { headerCLS, footerCLS } from "@/constants";

import { PagesRoutes } from "@/routes";
import { Modal } from "@/pages";

const basename = import.meta.env.VITE_API_TITLE;

export const AppRoute = () => {
  return (
    <BrowserRouter basename={basename}>
      <Modal />
      <Header className={headerCLS} />
      <PagesRoutes />
      <Footer className={footerCLS} />
    </BrowserRouter>
  );
};
