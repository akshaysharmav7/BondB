import React from "react";
import logo from "../assets/icons/BBlogo.png";
import "../assets/styles/Navbar.css";
import iconL from "../assets/icons/illustrationic.png";
import iconS from "../assets/icons/soundsic.png";
import iconSt from "../assets/icons/stockic.png";
import iconB from "../assets/icons/blogic.png";
import nav from "../assets/images/illustration/navbg.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
      <img src={nav} className="navbar-background" alt="navbar" />
      <div className="logo">
        <div className="logo-content">
          <img src={logo} alt="logo" height={102} width={252} />
          <p className="description">
            Bond Bind helps you to browse and download Sounds, Images,
            Illustrations and Design Blogs
          </p>
        </div>
        <ul className="nav-icons">
          <div className="icon-container">
            <img className="icon" src={iconL} alt="Illustrations" height={70} width={70} />
            <p className="icon-text-illustrations">Illustrations</p>
          </div>
          <div className="icon-container">
            <img className="icon" src={iconS} alt="Sounds" height={70} width={70} />
            <p className="icon-text">Sounds</p>
          </div>
          <div className="icon-container">
            <img className="icon" src={iconSt} alt="Stocks" height={70} width={70} />
            <p className="icon-text">Stocks</p>
          </div>
          <div className="icon-container">
            <img className="icon" src={iconB} alt="Blog" height={70} width={70} />
            <p className="icon-text">Blog</p>
          </div>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
