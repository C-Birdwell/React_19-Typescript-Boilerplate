import { Route, Routes } from "react-router-dom";

import { HomePage, ExamplePage, NotFoundPage, ModalDemoPage } from "@/pages";
import {
  URL_HOME,
  URL_EXAMPLE,
  URL_MODALS,
  URL_NOT_FOUND,
  mainCLS,
} from "@/constants";

export const PagesRoutes: React.FC = () => {
  return (
    <main className={mainCLS}>
      <Routes>
        <Route path={URL_HOME} index element={<HomePage />} />
        <Route path={URL_EXAMPLE} element={<ExamplePage />} />
        <Route path={URL_MODALS} element={<ModalDemoPage />} />
        <Route path={URL_NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
