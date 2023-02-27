import React from 'react'
import NavbarTwo from '../Header/Navbar_two'
import ecom from '../assets/ecom.jpg'
import Figure from 'react-bootstrap/Figure';

export default function Home() {
  return (
    <>
    
    <NavbarTwo/>

    <Figure>
      <Figure.Image
        width={3000}
        height={1000}
        alt="171x180"
        src={ecom}
      />
     
    </Figure>
    </>
  )
}
