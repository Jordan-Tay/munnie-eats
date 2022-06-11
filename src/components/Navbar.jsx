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

  const [drawerHeight, setDrawerHeight] = useState(0);
  const [navOpaque, setNavOpaque] = useState(false);

  const calcHeight = (el) => {
    setNavOpaque(true);
    setDrawerHeight(el.offsetHeight);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen)
        setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, setMenuOpen]);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className='nav-container' style={{ position: 'sticky' }}>
      <div className='nav' style={{ 
        paddingTop: 'env(safe-area-inset-top)',
        paddingLeft: `calc(env(safe-area-inset-left) + ${md ? '80px' : sm ? '40px' : '15px'}`,
        paddingRight: `calc(env(safe-area-inset-right) + ${md ? '80px' : sm ? '40px' : '15px'}`
      }}>
        <Link to='/' onClick={handleCloseMenu}>
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
      <div className='background' style={{ position: 'absolute', top: 0, width: '100%', height: `calc(80px + ${drawerHeight}px)`, ...(navOpaque ? { backgroundColor: 'var(--primary)' } : {}) }}>
        <CSSTransition in={menuOpen} unmountOnExit timeout={{ enter: 1000, exit: 500 }} classNames='drawer' onEnter={calcHeight} onExiting={() => setNavOpaque(false)} onExited={() => setDrawerHeight(0)}>
          <div className='drawer-container' style={{ 
            paddingLeft: `calc(env(safe-area-inset-left) + ${md ? '65px' : sm ? '25px' : '15px'}`,
            paddingRight: `calc(env(safe-area-inset-right) + ${md ? '65px' : sm ? '25px' : '15px'}`,
            paddingBottom: '15px'
          }}>
            <List>
                <ListItemButton
                  component={Link}
                  to='/'
                  key='Home'
                  disabled={pathname === '/'}
                  disableRipple
                  onClick={() => setMenuOpen(false)}>
                  <ListItemText primary='Home' primaryTypographyProps={{ fontSize: '20px' }} />
                </ListItemButton>
              <Divider />
                <ListItemButton
                  component={Link}
                  to='/about'
                  key='About'
                  disabled={pathname === '/about'}
                  disableRipple
                  onClick={() => setMenuOpen(false)}>
                  <ListItemText primary='About' primaryTypographyProps={{ fontSize: '20px' }} />
                </ListItemButton>
              <Divider />
                <ListItemButton 
                  component={Link}
                  to='/recipes'
                  key='Recipes'
                  disabled={pathname === '/recipes'}
                  disableRipple
                  onClick={() => setMenuOpen(false)}>
                  <ListItemText primary='Recipes' primaryTypographyProps={{ fontSize: '20px' }} />
                </ListItemButton>
            </List>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Navbar;
