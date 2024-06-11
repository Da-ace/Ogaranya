// import React, { useState } from "react";
import Logo from "/ogalogo3.png";

import "../styles/navbar.css";

import Hamburger from "/hamburger.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className={`nav_links ${isOpen && "open"}`}>
            {/* <div className="information nav_links "> */}
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Integration</a>
            <a href="#">Bill Receipt</a>
            <a href="#">Documentation</a>
            <button>Merchant Login</button>
          </div>

          {/* <div className="btns_container"> */}
          <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
            <img src={Hamburger} alt="" />
          </button>
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
