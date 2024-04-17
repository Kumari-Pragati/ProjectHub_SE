import { useState } from 'react'
import Navbar from './Components/Navbar'
import ImageSlider from './Components/ImageSlider'
import FlightDetails from './Components/FlightDetails'
import FeedbackCard from './FeedbackCard'
import Footer from './Components/Footer'
import LuxuryAd from './Components/LuxuryAd'
import ExperienceOurAirport from './Components/AirportExp'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <ImageSlider />
          <br />
          <br />
          <LuxuryAd />
          <br />
          <br />
          <FlightDetails />
          <a href="#" className='purple-button' onClick={() => {window.open('/nothing', '_self')}} style={{width: "80%", display: "block", margin: "0 auto", textAlign: "center", textDecoration: "none"}}>Show more...</a>
          <br />
          <ExperienceOurAirport />
          <FeedbackCard />
          <Footer />
          </>
        }></Route>
        <Route path="/nothing" element={
          <div>hello</div>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
