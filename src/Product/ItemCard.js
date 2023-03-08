import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CartContext from '../store/cart-context'


const ItemCard = (props) => {
  const  CartCtx=useContext(CartContext)
  let EmailId=localStorage.getItem('userEmailId')
  let userEmailId=EmailId.replace('@','')
  let newUserEmailId=userEmailId.replace('.','')

  const addToCartHandler=()=>{
  
    CartCtx.addItem({...props,quantity:1})
    fetch(`https://crudcrud.com/api/5d3b981e056f422698cbbfb0948f3972/cart${newUserEmailId}`,{
      method:"POST",
      body:JSON.stringify({
        id:props.id,
      title:props.title,
      price:props.price,
      img:props.img,
      quantity:1
      }),
      headers:{
        'Content-Type':"application/json"
      }
    }).then((res)=>{
      if(res.ok){
         return res.json().then((data)=>{
          console.log(data)
         })
      }else{
        return res.json().then((data)=>{
          console.log(data)
        })
      }
    })


}
const link=`product/${props.id}`
  return (
    <div className="col-md-4 my-3 " >
    <Card className='text-center' style={{ width: '18rem' }}>
    <Card.Title className='text-center'>{props.title}</Card.Title>
  <Link to={link}><Card.Img variant="top" src={props.img} /></Link>
  <Card.Body>
    <h4>Price : {props.price}Rs</h4>
    
    <Button className='text-center' variant="secondary" onClick={addToCartHandler}>Add To Cart</Button>
  </Card.Body>
</Card>
</div>
  );
};
export default ItemCard;
