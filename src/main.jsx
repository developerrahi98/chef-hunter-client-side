import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProviders from "./Provider/AuthProviders";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
  </AuthProviders>
);
