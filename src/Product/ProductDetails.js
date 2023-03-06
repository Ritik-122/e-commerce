import React from "react";

import { useParams } from "react-router-dom";
import Navbarr from "../Header/Navbarr";
import ItemCard from "./ItemCard";
import Carousel from "react-bootstrap/Carousel";


export default function ProductDetails() {
  const productsArr = [
    {
      id: "m1",
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "m2",
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "m3",
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "m4",
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const params = useParams();
  function check(item) {
    return item.id === params.id;
  }
  const clickedProducts = productsArr.filter(check);
  if(clickedProducts.length==0)
  {
    return <p>No item found</p>
  }
  console.log(clickedProducts);

  return (
    <>
      
      <Navbarr />
      
      <div className="row my-5 ">
        {clickedProducts.map((item) => {
          return (
            <div className="col-md-4 my-3 " key={item.img}>
              <ItemCard
                id={item.id}
                title={item.title}
                img={item.imageUrl}
                price={item.price}
              />
            </div>
          );
        })}
        {/* <Carousel style={{ width: "500px", height: "800px"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.ajio.com/medias/sys_master/root/20211203/0uT6/61aa2f30f997ddf8f1330f28/-473Wx593H-461592493-multi-MODEL.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/5c/4f/6e/5c4f6e0e335a59340a023553a95c9d1b.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              
              src="https://www.teejunction.com.au/ssc/i/blank_product_category_listing_image_quality/3399592/1000/750/FFFFFF/1/1/0/category.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </div>
     
    </>
  );
}
