import { Provider } from "react-redux";

import { AppRoute } from "@/routes";
import { store } from "@/store";
//import './App.css'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRoute />
      </div>
    </Provider>
  );
};
