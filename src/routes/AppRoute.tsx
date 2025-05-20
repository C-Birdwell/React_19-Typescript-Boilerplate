//import {useRef} from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Header, Footer } from "@/components";
import { HomePage, ExamplePage, NotFoundPage } from "@/pages";
import { homePageURL, examplePageURL, notFoundPageURL } from "@/constants";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="app_main">
        <Routes>
          <Route path={homePageURL} index element={<HomePage />} />
          <Route path={examplePageURL} element={<ExamplePage />} />
          <Route path={notFoundPageURL} element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
