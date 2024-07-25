import React from "react"
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom"; 
import Footer from "./Footer";
const PageSet=()=>{
    return (
      <>
        <header>
          <Navbar />
        </header>
        <Outlet />
        <footer>
          <Footer/>
        </footer>
      </>
    );
}
export default PageSet;