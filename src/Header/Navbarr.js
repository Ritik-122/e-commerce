import React,{useContext} from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import CartContext from '../store/cart-context';
export default function Navbarr() {
  const AuthContext=useContext(CartContext)
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">The Generics</Navbar.Brand>
      <Nav className="me-auto">
        <Link to='/home'><Button variant="outline-light" size="sm" className="mx-2">HOME</Button></Link>
        <Link to='/'><Button variant="outline-light" size="sm" className="mx-2">STORE</Button></Link>
        <Link to='/about'><Button variant="outline-light" size="sm" className="mx-2">ABOUT</Button></Link>
        <Link to='/login'><Button variant="outline-light" size="sm" className="mx-2">{!AuthContext.isLoggedIn ?'Login':'Logged In'}</Button></Link>
        <Link to='/contact'><Button variant="outline-light" size="sm" className="mx-2">Contact Us</Button></Link>
      </Nav>
      <Cart />
    </Container>
  </Navbar>
  )
}
