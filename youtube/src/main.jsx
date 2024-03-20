import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import MyComponent from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyComponent />
    </BrowserRouter>
  </React.StrictMode>
);
