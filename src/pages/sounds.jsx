import React,{useRef, useState} from 'react';
import box1 from '../assets/images/sounds/items/Rectangle 3.png';
import box2 from '../assets/images/sounds/items/Rectangle 4.png';
import box3 from '../assets/images/sounds/items/Rectangle 5.png';
import box4 from '../assets/images/sounds/items/Rectangle 6.png';
import Navbar from '../components/nav';
import styles from '../assets/styles/sound.module.css';
import NavBg from '../assets/images/sounds/soundNav.jpg'
import { Box, Grid2 } from '@mui/material';
import searchIcon from '../assets/icons/sicon.png';

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
//Hello World
const Sounds = () => {
  const inputRef = useRef(null);
  const [expanded, setExpanded] = useState(false); // State for expansion

  const handleIconClick = () => {
    setExpanded(true); // Expand the input
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input
    }
  };

  const handleBlur = () => {
    setExpanded(false); // Collapse on blur
  };

  const textStyle = {
    color:'white',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '4px'
  }

  const description = {
    color:'#FFFFFF',
    fontSize: '11px',
    marginTop: '8px'
  }

  return (
    <div className={styles.wholebox}>
      <Navbar navbarBg={NavBg} textStyle={textStyle} description={description} />

        {/* Search Bar */}
        <div className={styles.search}>
        <img 
            src={searchIcon} 
            className={styles.sicon} 
            alt="Search Icon" 
            onClick={handleIconClick}  // Click to expand and focus
            style={{cursor:"pointer"}}
          />
          <input
            type="text"
            ref={inputRef}
            placeholder="Search"
            className={styles.inputbox}
            onBlur={handleBlur}  // Blur to collapse
          />
        </div>
       
      <Box className={styles.bgbox}>
        <Grid2 container spacing={4} justifyContent="center">
          {items.map((item, index) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}> 
              <Box className={styles.items} >
                <img src={item.img} alt="" className={styles.imgs} /> 
                <Box className={styles.desc}>
                  <p>{item.text}</p>
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
};

export default Sounds;
