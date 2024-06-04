import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Context/ProductProvider.jsx";
import SideBarProvider from "./Context/SideBarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SideBarProvider>
);
