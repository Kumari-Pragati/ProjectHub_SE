import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Auction.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const images = [
  "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Auction = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(0);
  const [userBid, setUserBid] = useState(0);
  const [bidList, setBidList] = useState([
    { bidder: "John Doe", amount: 99.99 },
    { bidder: "Jane Smith", amount: 95.0 },
  ]);
  const [timeRemaining, setTimeRemaining] = useState(0.5 * 60); // 2 days in seconds
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          declareWinner();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setTimerId(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleBidChange = (e) => {
    setUserBid(parseFloat(e.target.value));
  };

  const placeBid = () => {
    if (userBid > bidList[0].amount) {
      const updatedBidList = [{ bidder: "You", amount: userBid }, ...bidList];
      setBidList(updatedBidList);
      setUserBid(0);
    }
  };

  const declareWinner = () => {
    alert(`Winner: ${bidList[0].bidder}, Amount: ${bidList[0].amount}`);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  const handlePayment = () => {
    // Redirect user to Stripe payment gateway URL
    window.location.href = "https://stripe.com";
  };

  return (
    <div className="product">
      <>
        <div className="left">
          <div className="images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                onClick={() => setSelectedImg(index)}
              />
            ))}
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt={`Main Image`} />
          </div>
        </div>
        <div className="right">
          <h1>Camera X350</h1>
          <span>Current Bid : </span>
          <h2 className="price">${bidList[0].amount}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            laborum repellat corporis assumenda omnis quaerat itaque earum
            quidem nesciunt eaque quia
          </p>
          <div className="auction-info">
            <div>
              <strong>Time Remaining:</strong> {formatTime(timeRemaining)}
            </div>
          </div>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
          </div>
          <div className="bid-section">
            <h2>Bids</h2>
            <ul>
              {bidList.map((bid, index) => (
                <li key={index}>
                  {bid.bidder} - ${bid.amount.toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="user-bid">
              <label htmlFor="bid">Your Bid:</label>
              <input
                type="number"
                id="bid"
                value={userBid}
                onChange={handleBidChange}
                placeholder="Enter your bid"
              />
              <button onClick={placeBid}>Place Bid</button>
            </div>
          </div>
          <button className="payment-button" onClick={handlePayment}>
            Pay with Stripe
          </button>
        </div>
      </>
    </div>
  );
};

export default Auction;
