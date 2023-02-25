import React from "react";
import Navbarr from "./Header/Navbarr.js";
import ListItem from "./Product/ListItem";
import CartProvider from "./store/CartProvider.js";

const App = () => {
  return (
    <CartProvider>
      <Navbarr />
      <ListItem />
    </CartProvider>
  );
};
export default App;
