import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute/ScrollToTopOnRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <ScrollToTopOnRoute />
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
