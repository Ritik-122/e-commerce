import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



const ItemCard=(props)=>{
    return(
        
        <Col>
        <Card style={{ width: '20rem' }} className=" ms-5">
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <ul><Card.Text >
            {props.price}
            <Button variant="info" className='ms-5'>ADD TO CART</Button>
            </Card.Text></ul>
            
          
          
          
        </Card.Body>
      </Card>
      </Col>
      
    )
}
export default ItemCard