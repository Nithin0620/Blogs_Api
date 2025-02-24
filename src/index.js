import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContextProvider from "./context/AppContext";
import {RouterProvider} from "react-router-dom";
import {router} from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router}/>
    </AppContextProvider>
  </React.StrictMode>
);
