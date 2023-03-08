import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [token, setToken] = useState(null);

  const [items, updateItems] = useState([]);

let userLogIn=localStorage.getItem('Token') ? true:false

const addUser=(token)=>{
setToken(token)
}
const removeUser=()=>{
    setToken(null)
}
  const addItem = (item) => {
    let temp = [...items];
    let indxOfItem = temp.findIndex((i) => i.id === item.id);
    if (indxOfItem === -1) {
      temp = [...temp, item];
    } else {
      temp[indxOfItem].quantity = Number(temp[indxOfItem].quantity) + 1;
    }
    updateItems([...temp]);
  };
  const removeItemFromCartHandler = (id) => {
    let temp = [...items];
    let indxOfItem = temp.findIndex((i) => i.id === id);
    if (temp[indxOfItem].quantity > 1) {
      temp[indxOfItem].quantity = Number(temp[indxOfItem].quantity) - 1;
    } else {
      temp = temp.filter((i) => i.id !== id);
    }
    updateItems([...temp]);
  };
  

  const cartContext = {
    
    token: token,
    isLoggedIn: userLogIn,
    items: items,
    addItem: addItem,
    removeItem: removeItemFromCartHandler,
    addUser: addUser,
    removeUser: removeUser,
  
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
