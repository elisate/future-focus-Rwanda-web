import React from "react"
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom"; 
const PageSet=()=>{
    return (
      <>
        <header>
          <Navbar />
        </header>
        <Outlet />
        <footer></footer>
      </>
    );
}
export default PageSet;