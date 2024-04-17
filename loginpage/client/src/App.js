import {Signup} from './MyComponents/Signup'
import {Footer} from "./MyComponents/Footer";
import {Header} from "./MyComponents/Header";
import {Login} from "./MyComponents/Login";
import background from "./MyComponents/Diu-Haveli-Quarter-G2-1.jpg";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import {Home} from "./MyComponents/Home";

function App() {
  return(

    <>
    <div style = {{backgroundImage : `url(${background})` , backgroundRepeat: 'no-repeat' , backgroundSize : "cover" , width  : "100%", height: '100vh'}}>
    <Header/>
    <BrowserRouter>
      <Routes>
          <Route path = '/register' element = {<Signup/>}> </Route>
          <Route path = '/' element = { <Login />} ></Route>
          <Route path = '/home' element = { <Home />}> </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>


  );
}

export default App;
