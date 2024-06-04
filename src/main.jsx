import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Context/ProductProvider.jsx";
import SideBarProvider from "./Context/SideBarContext.jsx";
import CartProvider from "./Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
);
