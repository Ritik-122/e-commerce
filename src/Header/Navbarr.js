import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import Cart from './Cart'

export default function Navbarr() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">The Generics</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#store">STORE</Nav.Link>
        <Nav.Link href="#about">ABOUT</Nav.Link>
      </Nav>
      <Cart />
    </Container>
  </Navbar>
  )
}
