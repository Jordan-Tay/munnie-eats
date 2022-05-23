import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { AppBar, Backdrop, Divider, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
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

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  // const [menuOpen, setMenuOpen] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);

  const calcHeight = (el) => {
    console.log(el.offsetHeight);
    setDrawerHeight(el.offsetHeight);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen)
        setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='nav-container' style={{ position: 'sticky' }}>
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
      <div className='background' style={{ position: 'absolute', top: 0, width: '100%', height: `calc(80px + ${drawerHeight}px)` }}>
        <CSSTransition in={menuOpen} unmountOnExit timeout={{
          enter: 1000,
          exit: 500
        }} classNames='drawer' onEnter={calcHeight} onExited={() => setDrawerHeight(0)}>
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
    </div>
  );
}

export default Navbar;
