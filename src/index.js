import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import store from "./state/store";
import App from "./App";
const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </Provider>
);
