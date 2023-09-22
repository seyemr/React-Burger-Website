import React from 'react'
import Logo from "../assets/hamburgerlogo.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
            <h1 >Burgercim</h1>
        </div>
        <div className='rightSide'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/productpage" >Menu Detail</Link>
            
        </div>
    </div>
  )
}

export default Navbar