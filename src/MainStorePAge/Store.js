import React from "react";
import CartProvider from "../store/CartProvider";
import ListItem from "../Product/ListItem";
import Navbarr from "../Header/Navbarr";

export default function Store() {
  return (
    <>
      <CartProvider>
        <Navbarr />

        <ListItem />
      </CartProvider>
    </>
  );
}
