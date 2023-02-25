import ItemCard from "./ItemCard";


const productsArr = [
  {
    id:"m1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:"m2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:"m3",
    title: "Yellow and Black Colors",

    price:70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:"m4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ListItem = () => {
  return (
    <div className="container my-3">
              <h1 className='text-center mb-5'>The Generic</h1> 
              <div className="row" > 
            
              {productsArr.map((item)=>{
                  return <div className="col-md-4 my-3 " key={item.img}>
                     <ItemCard key={item.id} id={item.id}  title={item.title} img={item.imageUrl} price={item.price} />
                  </div> 
              })} 
              </div> 
              </div> 
  );
};
export default ListItem;
