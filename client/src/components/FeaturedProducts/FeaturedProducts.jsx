import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
// import useFetch from "../../hooks/useFetch";

const data = [
  {
    id: 1,
    title: "Digital Camera",
    img: "https://images.pexels.com/photos/2923672/pexels-photo-2923672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 150,
    timeRemaining: "5h",
  },
  {
    id: 2,
    title: "Smartphone",
    img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 200,
    timeRemaining: "3h",
  },
  {
    id: 3,
    title: "Laptop",
    img: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 300,
    timeRemaining: "1h",
  },
  {
    id: 4,
    title: "Smartwatch",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 120,
    timeRemaining: "1d 2h",
  },
];


const FeaturedProducts = ({ type }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][type][$eq]=${type}`
//   );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Auctions Ending Soon</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
