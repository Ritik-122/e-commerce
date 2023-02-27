import React from 'react'

import {Container,Nav,Navbar} from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default function NavbarTwo() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">The Generics</Navbar.Brand>
      <Nav className="me-auto">
        <Link to='/home'><Nav.Link href="#home">HOME</Nav.Link></Link>
        <Link to='/store' ><Nav.Link href="#store">STORE</Nav.Link></Link>
        <Link to='/about'><Nav.Link href="#about">ABOUT</Nav.Link></Link>
      </Nav>
      
    </Container>
  </Navbar>
  )
}
