import ItemCard from "./ItemCard";


const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price:70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ListItem = () => {
  return (
    <div className="container my-3">
              <h1 className='text-center mb-5'>My Products</h1> 
              <div className="row" > 
            
              {productsArr.map((item)=>{
                  return <div className="col-md-4 my-3 " key={item.img}>
                     <ItemCard key={item.title} title={item.title} img={item.imageUrl} price={item.price} />
                  </div> 
              })} 
              </div> 
              </div> 
  );
};
export default ListItem;
