import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import store from "./state/store";
import App from "./App";
const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_KEY}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);
