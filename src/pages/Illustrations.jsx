import React from 'react';
import box1 from '../assets/images/illustration/box1.png';
import box2 from '../assets/images/illustration/box2.png';
import box3 from '../assets/images/illustration/box3.png';
import box4 from '../assets/images/illustration/box4.png';
import box5 from '../assets/images/illustration/box5.png';
import box6 from '../assets/images/illustration/box6.png';
import box7 from '../assets/images/illustration/box7.png';
import box8 from '../assets/images/illustration/box8.png';
import { IoIosSearch } from "react-icons/io";
import Navbar from '../components/nav';
import '../assets/styles/Illustrations.css'

const items = [
  { img: box1, text: 'Girl in the office' },
  { img: box2, text: 'On the office' },
  { img: box3, text: 'In the office' },
  { img: box4, text: 'Working' },
  { img: box5, text: 'Designer Life' },
  { img: box6, text: 'Office snack' },
  { img: box7, text: 'Quite Time' },
  { img: box8, text: 'Deal ON' }
];

const Illustrations = () => {
  return (
    <>
      <div className="bgbox">
      <Navbar />
        <div className="search">
          <IoIosSearch className="sicon" />
          <input type="text" placeholder="Search" className="inputbox" />
        </div>
        <div className="bodycontainer">
        <div className="container">
          {items.map((item, index) => (
            <div key={index} className="items">
              <img src={item.img} alt="" className="imgs" />
              <p className="desc">{item.text}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default Illustrations;
