import React from 'react'
import CartProvider from '../store/CartProvider'
import ListItem from '../Product/ListItem'
import {Container,Nav,Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <>
   <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">The Generics</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to='/home'><Nav.Link href="#home">HOME</Nav.Link></NavLink>
        <NavLink ><Nav.Link href="#store">STORE</Nav.Link></NavLink>
        <NavLink to='/about'><Nav.Link href="#about">ABOUT</Nav.Link></NavLink>
      </Nav>
     
    </Container>
  </Navbar>
    <CartProvider>
        <ListItem />
    </CartProvider>
    </>
  )
}
