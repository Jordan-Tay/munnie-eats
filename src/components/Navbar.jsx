import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { AppBar, useMediaQuery, useTheme } from '@mui/material';
import UseAnimations from 'react-useanimations';
import menu from 'react-useanimations/lib/menu';
import instagram from 'react-useanimations/lib/instagram';
import { Link, useLocation } from 'react-router-dom';

const pathnameMap = {
  '/': 'LATEST',
  '/about': 'ABOUT',
  '/recipes': 'RECIPES'
}

export const Navbar = ({menuOpen, toggleMenu}) => {
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar sx={{ position: 'relative', zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
    <div className='nav'>
      {/* <div style={{display: 'flex', alignItems: 'center'}}> */}
        <UseAnimations 
          wrapperStyle={{cursor: 'pointer', position: 'absolute', left: '10px', top: '20px'}}
          animation={menu} 
          size={42} 
          reverse={!menuOpen}
          onClick={() => toggleMenu(!menuOpen)}
        />
        <Link to='/'>
          {/* <div className='title' style={{marginLeft: '10px'}}> */}
          <h1>
            Munnie Eats
            {matches && <span className='pathname'>
              {pathnameMap[location.pathname] || 'RECIPES'}
            </span>}
          </h1>
          {/* </div> */}
        </Link>
      {/* </div> */}
      <div style={{display: 'flex', alignItems: 'center', position: 'absolute', right: '10px', top: '20px'}}>
        {/* <UseAnimations 
          wrapperStyle={{cursor: 'pointer', marginRight: '10px'}}
          animation={twitter} 
          size={42} 
        /> */}
        <a 
          href='https://www.instagram.com/munnie_eats/?hl=en-gb'
          className='circular-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <UseAnimations 
            wrapperStyle={{cursor: 'pointer'}}
            animation={instagram} 
            size={42} 
            // onClick={() => toggleMenu(!menuOpen)}
          />
        </a>
      </div>
    </div>
    </AppBar>
  );
}
  
export default Navbar;