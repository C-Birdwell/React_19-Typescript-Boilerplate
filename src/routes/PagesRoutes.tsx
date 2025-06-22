import { Route, Routes } from "react-router-dom";

import { HomePage, NotFoundPage, ModalDemoPage, CardsPage } from "@/pages";
import {
  URL_HOME,
  URL_MODALS,
  URL_NOT_FOUND,
  URL_CARDS,
  mainCLS,
} from "@/constants";

export const PagesRoutes: React.FC = () => {
  return (
    <main className={mainCLS}>
      <Routes>
        <Route path={URL_HOME} index element={<HomePage />} />
        <Route path={URL_CARDS} element={<CardsPage />} />
        <Route path={URL_MODALS} element={<ModalDemoPage />} />

        <Route path={URL_NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
