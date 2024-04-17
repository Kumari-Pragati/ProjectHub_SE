import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/auction/${item.id}`}>
      <div className="card">
        <div className="image">
          <img
            src={
              item.img
            }
            alt=""
            className="mainImg"
          />
        </div>
        <h1>{item.title}</h1>
        <h2>{item.timeRemaining}</h2>
        <div className="prices">
          <h3>${item.currentBid}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
