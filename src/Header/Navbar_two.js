import React from 'react'
import Button from "react-bootstrap/Button";
import {Container,Nav,Navbar} from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default function NavbarTwo() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">The Generics</Navbar.Brand>
      <Nav className="me-auto">
      <Link to='/home'><Button variant="outline-light" size="sm" className="mx-2">HOME</Button></Link>
        <Link to='/store'><Button variant="outline-light" size="sm" className="mx-2">STORE</Button></Link>
        <Link to='/about'><Button variant="outline-light" size="sm" className="mx-2">ABOUT</Button></Link>
        <Link to='/contact'><Button variant="outline-light" size="sm" className="mx-2">Contact Us</Button></Link>
      </Nav>
      
    </Container>
  </Navbar>
  )
}
