import { Route, Routes } from "react-router-dom";

import { HomePage, ExamplePage, NotFoundPage } from "@/pages";
import {
  homePageURL,
  examplePageURL,
  notFoundPageURL,
  mainCLS,
} from "@/constants";

export const PagesRoutes: React.FC = () => {
  return (
    <main className={mainCLS}>
      <Routes>
        <Route path={homePageURL} index element={<HomePage />} />
        <Route path={examplePageURL} element={<ExamplePage />} />
        <Route path={notFoundPageURL} element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
