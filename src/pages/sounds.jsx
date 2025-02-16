import React from 'react';
import box1 from '../assets/images/sounds/items/Rectangle 3.png';
import box2 from '../assets/images/sounds/items/Rectangle 4.png';
import box3 from '../assets/images/sounds/items/Rectangle 5.png';
import box4 from '../assets/images/sounds/items/Rectangle 6.png';
import { IoIosSearch } from "react-icons/io";
import Navbar from '../components/soundNav';
import styles from '../assets/styles/sound.module.css'; 

const items = [
  { img: box1, text: 'Girl in the office' },
  { img: box2, text: 'On the office' },
  { img: box3, text: 'In the office' },
  { img: box4, text: 'Working' },
  { img: box1, text: 'Girl in the office' },
  { img: box2, text: 'On the office' },
  { img: box3, text: 'In the office' },
  { img: box4, text: 'Working' },
  { img: box1, text: 'Girl in the office' },
  { img: box2, text: 'On the office' },
  { img: box3, text: 'In the office' },
  { img: box4, text: 'Working' },
  { img: box1, text: 'Girl in the office' },
  { img: box2, text: 'On the office' },
  { img: box3, text: 'In the office' },
  { img: box4, text: 'Working' },
];
//Sounds page
const Sounds = () => {
  return (
    <div className={styles.wholebox}>
      <Navbar />
      <div className={styles.bgbox}>
        <div className={styles.search}>
          <IoIosSearch className={styles.sicon} />
          <input type="text" placeholder="Search" className={styles.inputbox} />
        </div>
        
        <div className={styles.container}>
          {items.map((item, index) => (
            <div key={index} className={styles.items}>
              <img src={item.img} alt="" className={styles.imgs} />
              <p className={styles.desc}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sounds;
