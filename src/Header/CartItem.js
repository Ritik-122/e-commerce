import Figure from 'react-bootstrap/Figure';
import Button from "react-bootstrap/Button";

const CartItem=(props)=>{
    return(
        <tr>
    
        <td> <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={props.img}
      />    
    </Figure></td>
    
           <td>{props.title}</td> 
          <td> {props.price}</td> 
          <td>{props.quantity}</td>
          <td><Button variant="danger">X</Button></td>
        </tr>

    )

}
export default CartItem