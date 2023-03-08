import React, { useContext, useRef} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import NavbarTwo from "../Header/Navbar_two";
import classes from "../Login/LoginForm.module.css";
import CartContext from "../store/cart-context";
export default function LoginForm() {

  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const history=useHistory()
const AuthContext=useContext(CartContext)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredEmail.current.value, enteredPassword.current.value);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATIKSUGO-VOInVAzf2pwNXWquajj3hm_8",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail.current.value,
          password: enteredPassword.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          console.log(data.idToken);
          AuthContext.addUser(data.idToken)
          localStorage.setItem("Token", data.idToken);
          localStorage.setItem('userEmailId',data.email)
          console.log(data.email)
          history.replace('/store')
          
        });
      } else {
        return res.json().then((data) => {
          let errorMessage = "";
          if(data.error.message){
              errorMessage=data.error.message
            alert(errorMessage)
            
          }else{
            errorMessage="Authentication Failed"
            alert(errorMessage);
          }
          
        });
      }
    });
  };
  return (
    <>
    <NavbarTwo/>
   
    <h2 >Login to see the Product page</h2>
      <div className={classes.container}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={enteredEmail}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              ref={enteredPassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
      
    </>
  );
}
