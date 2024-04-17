import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./App.css";

import { Router, RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer/Footer";
import AuctionsCategory from "./components/pages/AuctionCategory/AuctionsCategory";
import Auction from "./components/pages/Auction/Auction";
import MyAuctions from "./components/pages/MyAuctions/MyAuctions";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auctionsCategory/:id",
        element: <AuctionsCategory />,
      },
      {
        path: "/auction/:id",
        element: <Auction />,
      },
      {
        path: "/myauctions",
        element: <MyAuctions />,
      },
    ],
  },{
    path: "/register",
    element: <Register />,
  },{
    path: "/login",
    element: <Login />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
