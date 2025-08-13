import React from "react";
import logo from "../assets/icons/BBlogo.png";
import styles from "../assets/styles/Navbar.module.css";
import iconL from "../assets/icons/illustrationic.png";
import iconS from "../assets/icons/soundsic.png";
import iconSt from "../assets/icons/stockic.png";
import iconB from "../assets/icons/blogic.png";
import { Link } from "react-router-dom";

const Navbar = ({navbarBg, style}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <img src={navbarBg} className={styles.navbarBackground} alt="navbar" />
        <div className={styles.logo}>
          <div className={styles.logoContent}>
            <img src={logo} alt="logo" height={102} width={252} />
            <p className={styles.description}>
              Bond Bind helps 
            </p>
          </div>
          <ul className={styles.navIcons}>
          
          <Link to='/'>  <div className={styles.iconContainer}>
              <img className={styles.icon} src={iconL} alt="Illustrations" height={70} width={70} />
              <p style={style}>Akshay</p>
            </div></Link>

            <Link to='/sounds'>   <div className={styles.iconContainer}>
              <img className={styles.icon} src={iconS} alt="Sounds" height={70} width={70} />
              <p className={styles.iconText}>Sounds</p>
            </div></Link>
            <div className={styles.iconContainer}>
              <img className={styles.icon} src={iconSt} alt="Stocks" height={70} width={70} />
              <p className={styles.iconText}>Stocks</p>
            </div>
            <div className={styles.iconContainer}>
              <img className={styles.icon} src={iconB} alt="Blog" height={70} width={70} />
              <p className={styles.iconText}>Blog</p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
