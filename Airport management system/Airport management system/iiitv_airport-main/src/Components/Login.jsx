import React from 'react'
import './AirportExp.css'

const handleClick = () => {
      window.open('src/assets/stuff/login.html', '_blank');
    };

    
function Login() {
  return (
        <a href="" onClick={handleClick} style={{textDecoration: "none"}}>Login/Signup</a>
  )
}

export default Login