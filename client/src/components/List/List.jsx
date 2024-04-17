import React from 'react'
import Card from '../Card/Card';
import './List.scss';
import { useParams } from 'react-router-dom';


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



const fashionData = [
  {
    id: 1,
    title: "Skirt",
    img: "https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 25,
    timeRemaining: "1d 10h",
  },
  {
    id: 2,
    title: "T-shirt",
    img: "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 30,
    timeRemaining: "2d 5h",
  },
  {
    id: 3,
    title: "Dress",
    img: "https://images.pexels.com/photos/1566435/pexels-photo-1566435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 20,
    timeRemaining: "1d 15h",
  },
  {
    id: 4,
    title: "Jacket",
    img: "https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 35,
    timeRemaining: "2d 3h",
  },
  {
    id: 5,
    title: "Jeans",
    img: "https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentBid: 28,
    timeRemaining: "1d 20h",
  },
];




function List({ catId }) {
  const prodId = parseInt(useParams().id);
  return (
    <div className='list'>
      {catId === 6 ? (
        <>
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </>
      ) : (
        <>
          {fashionData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </>
      )}
    </div>
  );
}


export default List
