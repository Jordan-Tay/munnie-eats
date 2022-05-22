import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { AppBar, Divider, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import UseAnimations from 'react-useanimations';
import menu from 'react-useanimations/lib/menu';
import instagram from 'react-useanimations/lib/instagram';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const pathnameMap = {
  '/': ' LATEST',
  '/about': ' ABOUT',
  '/recipes': ' RECIPES',
  '/all': ' ALL',
}

export const Navbar = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);

  const calcHeight = (el) => {
    console.log(el.offsetHeight);
    setDrawerHeight(el.offsetHeight);
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setMenuOpen(false);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className='nav-container' style={{ position: 'sticky', height: `calc(80px + ${drawerHeight}px)` }}>
      <div className='nav' style={{ padding: md ? '0 80px' : sm ? '0 40px' : '0 15px' }}>
        <Link to='/'>
          <div className='title'>
            Munnie Eats
            {pathname !== '/404' && (sm || md) && <span className='pathname'>
              {pathnameMap[pathname] || 'RECIPES'}
            </span>}
          </div>
        </Link>
        <div className='icons-container'>
          <UseAnimations
            wrapperStyle={{ cursor: 'pointer' }}
            animation={menu}
            size={42}
            reverse={!menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <a
            href='https://www.instagram.com/munnie_eats/?hl=en-gb'
            className='circular-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <UseAnimations
              wrapperStyle={{ cursor: 'pointer' }}
              animation={instagram}
              size={42}
            />
          </a>
        </div>
      </div>
      <CSSTransition in={menuOpen} unmountOnExit timeout={1000} classNames='drawer' onEnter={calcHeight} onExit={() => setDrawerHeight(0)}>
        <div className='drawer-container' style={{ padding: md ? '0 65px 15px' : sm ? '0 25px 15px' : '15px' }}>
          <List>
            <Link to='/' onClick={() => setMenuOpen(false)}>
              <ListItemButton key='Home'>
                <ListItemText primary='Home' primaryTypographyProps={{ fontSize: '20px' }} />
              </ListItemButton>
            </Link>
            <Divider />
            <Link to='/about' onClick={() => setMenuOpen(false)}>
              <ListItemButton key='About'>
                <ListItemText primary='About' primaryTypographyProps={{ fontSize: '20px' }} />
              </ListItemButton>
            </Link>
            <Divider />
            <Link to='/recipes' onClick={() => setMenuOpen(false)}>
              <ListItemButton key='Recipes'>
                <ListItemText primary='Recipes' primaryTypographyProps={{ fontSize: '20px' }} />
              </ListItemButton>
            </Link>
          </List>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Navbar;
