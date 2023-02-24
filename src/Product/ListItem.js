import ItemCard from "./ItemCard";
import Row from "react-bootstrap/Row";

const productsArr = [
  {
    title: "Colors",

    price: '$100',

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: '$50',

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: '$70',

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: '$100',

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ListItem = () => {
  return (
    <>
      
      <Row xs={1} md={2} className="g-4 mx-5 my-5 align-items-center ms-5">
        {productsArr.map((i) => (
          <ItemCard title={i.title} price={i.price} img={i.imageUrl} />
        ))}
      </Row>
      
    </>
  );
};
export default ListItem;
