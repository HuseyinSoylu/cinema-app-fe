import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./store/appStore.ts";
import FilmDetail from "./pages/FilmDetail.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/film/:filmId",
    element: <FilmDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
