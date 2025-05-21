import { Provider } from "react-redux";

import { AppRoute } from "@/routes";
import { store } from "@/store";

// Compiled style sheet from SaSS
import "@/styles/_index.scss";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};
