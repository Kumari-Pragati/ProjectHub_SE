import React from 'react'
import logo from './icons/HOME-removebg-preview.png'
import avatar from './icons/WhatsApp Image 2024-04-08 at 03.58.01.jpeg'
import './NavBar.css'
import {MailOutlined , BellOutlined} from "@ant-design/icons";
import {Space , Badge} from "antd";

export const NavBar = () => {

  return (
    <div class="navbar">
   <a href="http://127.0.0.1:5500/index.html">
      <img src={logo} alt="Logo" class="logo"/>
  </a>
    <div class="title">Arpita's Dashboard</div>
    <Space style={{marginRight: "5rem"}}>

         <Badge count = {20} dot><MailOutlined  style={{backgroundColor : "white" , fontSize: '25px' , padding : '1rem' , borderRadius: '50px'}}/></Badge> 
         <Badge count = {20}><BellOutlined style={{backgroundColor : "white" , fontSize: '25px' , padding : '1rem' , borderRadius: '50px'}}/>
    </Badge ></Space>
    <img src={avatar} alt="Profile Picture" class="profile-pic"/>
    </div>
  )
}
