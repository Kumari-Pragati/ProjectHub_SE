import React from 'react'
import './Signup.css'
import userIcon from './icons/profile-user.png'
import emailIcon from './icons/email-icon-121.png'
import passwordIcon from './icons/password-6-512.png'
import {useState} from 'react'
import {useNavigate , Link} from "react-router-dom";

import axios from 'axios'



export const Signup = () => {
    const [action, setAction] = useState("Sign Up");


    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register' , {name , email , password})
        .then (result => {console.log(result)
                navigate('/');
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
                    <img src={userIcon} alt="" />
                    <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
                </div>
            
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
            <button type = "submit" className={action==="Login" ? "submit gray" : "submit"} onClick = {()=>{setAction("Sign Up")}} >Sign Up</button>
            <Link to = "/" className={action==="Sign Up" ? "submit gray" : "submit"} onClick = {()=>{setAction("Login")}}>Login</Link>
        </div>
        </form>
     </div>
  )
}
