import { useState } from 'react'
import './App.css'
import Sidebar from './MyComponents/SideBar'
import Home from './MyComponents/Home'
import {Footer} from "./MyComponents/Footer"
import {NavBar} from "./MyComponents/NavBar"
import BackGround from './MyComponents/icons/Diu-Haveli-Quarter-G2-1.jpg'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import {Rides} from './MyComponents/Rides'
import {Reports} from './MyComponents/Reports'
import {Settings }from './MyComponents/Settings'


function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <BrowserRouter>
    <div className='App' style={{backgroundImage: `url(${BackGround})` , backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
    <NavBar/>
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
      <Route path='/dashboard' element={<Home />}></Route>
            <Route path='/rides' element = {<Rides/>}></Route>
            <Route path='/driverreports' element = {<Reports/>}></Route>
            <Route path='/settings' element = {<Settings/>}></Route>
      </Routes>
           
      <Footer/>
    </div>
    </div>
    </BrowserRouter>
    
  )
}

export default App