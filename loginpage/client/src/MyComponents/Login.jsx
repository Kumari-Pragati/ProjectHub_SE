import React from 'react'
import './Signup.css'
import emailIcon from './icons/email-icon-121.png'
import passwordIcon from './icons/password-6-512.png'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate , Link} from "react-router-dom";

export const Login = () => {    
    const [action, setAction] = useState("Login");
    const navigate = useNavigate();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();



    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001', { email, password })
          .then(result => {
              console.log(result);
              if (result.data === "Success") {
                  window.location.href = 'http://127.0.0.1:5500/index.html'; // Navigate relative to the current origin
              } else {
                  alert("Incorrect Credentials!");
              }
          })
          .catch(err => console.log(err));
  }
  


  return (
    <div className='container '>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className = "underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='inputs'>
            <div className="input">
                <img src={emailIcon} alt="" />
                <input type="email" placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={passwordIcon} alt="" />
                <input type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
        </div>}
        
        <div className="submit-container">
            <Link to = "/register" className={action==="Login" ? "submit gray" : "submit"} onClick = {()=>{setAction("Sign Up")}} >Sign Up</Link>
            <button type = "submit" className={action==="Sign Up" ? "submit gray" : "submit"} onClick = {()=>{setAction("Login")}}>Login</button>
        </div>
        </form>
     </div>
  )
}
