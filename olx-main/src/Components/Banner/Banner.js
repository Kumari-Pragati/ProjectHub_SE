import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
        <h5>CATEGORY : </h5>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Cars")} >Cars</span>
            <span onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Motorcycles")} >Motorcycles</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span>
          </div>
        </div>
        <div className="banner">
          <img src="https://imgs.search.brave.com/ThZJ4xke00WhHxlTHZizKtY5YFc6Oo6DJ91BZP8tA3A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC83MS8wMy9t/YXJrZXRwbGFjZS1y/ZXRhaWwtYnVzaW5l/c3Mtb25saW5lLXNo/b3BwaW5nLXZlY3Rv/ci0zNjQyNzEwMy5q/cGc" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
