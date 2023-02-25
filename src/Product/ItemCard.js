import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from '../store/cart-context'

const ItemCard = (props) => {
  const  CartCtx=useContext(CartContext)
  

  const addToCartHandler=()=>{
  
    CartCtx.addItem({...props,quantity:1})

}

  return (
    <Card className='text-center' style={{ width: '18rem' }}>
    <Card.Title className='text-center'>{props.title}</Card.Title>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <h4>Price : {props.price}Rs</h4>
    
    <Button className='text-center' variant="secondary" onClick={addToCartHandler}>Add To Cart</Button>
  </Card.Body>
</Card>
  );
};
export default ItemCard;
