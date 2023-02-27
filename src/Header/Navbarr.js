import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import Cart from './Cart'
import { Link } from 'react-router-dom'

export default function Navbarr() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">The Generics</Navbar.Brand>
      <Nav className="me-auto">
        <Link to='/home'><Nav.Link href="#home">HOME</Nav.Link></Link>
        <Link to='/'><Nav.Link href="#store">STORE</Nav.Link></Link>
        <Link to='/about'><Nav.Link href="#about">ABOUT</Nav.Link></Link>
      </Nav>
      <Cart />
    </Container>
  </Navbar>
  )
}
