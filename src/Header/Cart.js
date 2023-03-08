import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";
import CartContext from "../store/cart-context";

const Cart = () => {


  const [apiData, setData] = useState([]);

  const CartCtx = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    let EmailId = localStorage.getItem("userEmailId");
    let userEmailId = EmailId.replace("@", "");
    let newUserEmailId = userEmailId.replace(".", "");
    fetch(
      `https://crudcrud.com/api/5d3b981e056f422698cbbfb0948f3972/cart${newUserEmailId}`,
      { method: "GET" }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setData(data);
          console.log(data)
        });
      } else {
        return res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };
  let showCartItems;
 
   


  showCartItems = apiData.map((i) => (
    <CartItem
      id={i.id}
      title={i.title}
      img={i.img}
      price={i.price}
      quantity={i.quantity}
    />
  ));

  let totalCount = 0;

  apiData.forEach((item) => {
    totalCount = totalCount + item.quantity;
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
