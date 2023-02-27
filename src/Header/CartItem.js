import Figure from 'react-bootstrap/Figure';
import Button from "react-bootstrap/Button";
import { useContext } from 'react';
import CartContext from '../store/cart-context';
const CartItem=(props)=>{
const CartCtx=useContext(CartContext)
  const removeItemHandler=()=>{

    CartCtx.removeItem(props.id)
  }
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
          <td><Button variant="danger" onClick={removeItemHandler}>X</Button></td>
        </tr>

    )

}
export default CartItem