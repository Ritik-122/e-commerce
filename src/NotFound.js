import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <>
         <Figure>
      <Figure.Image
        width={1000}
        height={1200}
        alt="171x180"
        src="https://blog.stackfindover.com/wp-content/uploads/2022/05/Fully-responsive-404-page.jpg"
      />
      <Figure.Caption>
       <Link to='/'>Back to home</Link> 
      </Figure.Caption>
    </Figure>
    </>
  )
}
