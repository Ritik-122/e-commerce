import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";
import CartContext from "../store/cart-context";

const Cart = () => {
  const CartCtx=useContext(CartContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showCartItems = CartCtx.items.map((i) => (
    <CartItem

      id={i.id}
      title={i.title}
      quantity={i.quantity}
      img={i.img}
      price={i.price}
    />
  ));
  let totalCount = 0;
  
  CartCtx.items.forEach((item) => {
    totalCount =totalCount+ (item.quantity);
    
  });
  
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Cart <sup>{totalCount}</sup>
      </Button>
      
      <Offcanvas show={show} onHide={handleClose} end>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table size="sm">
            <thead>
              <tr>
              <th>#</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>{showCartItems}</tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Cart;
