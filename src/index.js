import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./store/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
  <BrowserRouter>
  
  <App />
 
    
  </BrowserRouter>
  </CartProvider>
);
