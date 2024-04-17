import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../List/List";
import "./AuctionsCategory.scss";

const AuctionsCategory = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
  };

  const data = [
    {
      id: 1,
      attributes: {
        title: "Laptops",
      }
    },
    {
      id: 2,
      attributes: {
        title: "Smart Phones",
      }
    },
    {
      id: 3,
      attributes: {
        title: "Smart Watches",
      }
    }

  ];

  const data2 = [
    {
      id: 1,
      attributes: {
        title: "Skirts",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Jacket",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Tshirt",
      },
    },
  ];

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {catId === 6 ? (
            <>
              {data.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </>
          ) : (
            <>
              {data2.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <label>0</label>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <label>{maxPrice}</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Ending Soon</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Ending Latest</label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Highest Bid</label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Lowest Price</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} />
      </div>
    </div>
  );
};

export default AuctionsCategory;
