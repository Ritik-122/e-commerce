import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "../Contact/ContactForm.module.css";
import NavbarTwo from "../Header/Navbar_two";
// https://ecommerce-85c97-default-rtdb.firebaseio.com/
export default function ContactForm() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email_id: e.target.email.value,
      phone_number: e.target.phnumber.value,
    };
    const res = await fetch(
      "https://ecommerce-85c97-default-rtdb.firebaseio.com/userData.json",
      { method: "POST", body: JSON.stringify(userData) }
    );
    const data = res.json();
    console.log(data);
  };

  return (
    <>
      <NavbarTwo />
      <div className={classes.app}>
        <div className={classes.container}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phnumber"
                type="number"
                placeholder="Mobile no."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
