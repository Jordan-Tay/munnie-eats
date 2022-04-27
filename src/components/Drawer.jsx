import { Drawer as MuiDrawer, List, ListItem, ListItemText } from '@mui/material';
import './Drawer.css';
import { Link } from 'react-router-dom';
import React from 'react';
import UseAnimations from 'react-useanimations';
import arrowUp from 'react-useanimations/lib/arrowUp';

export const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <MuiDrawer
      open={isOpen}
      anchor='top'
      onClose={() => setIsOpen(false)}
      variant='temporary'
      sx={{ position: 'relative', "& .MuiDrawer-paper": { borderWidth: 0 } }}
    >
      <div style={{ height: '82px', backgroundColor: '#ffe4e1' }} />
      <div className='drawer-container'>
        <List>
          <Link to='/' onClick={() => setIsOpen(false)}>
            <ListItem button key='Home'>
              <ListItemText primary='Home' primaryTypographyProps={{ fontSize: '20px' }} />
            </ListItem>
          </Link>
          <Link to='/about' onClick={() => setIsOpen(false)}>
            <ListItem button key='About'>
              <ListItemText primary='About' primaryTypographyProps={{ fontSize: '20px' }} />
            </ListItem>
          </Link>
          <Link to='/recipes' onClick={() => setIsOpen(false)}>
            <ListItem button key='Recipes'>
              <ListItemText primary='Recipes' primaryTypographyProps={{ fontSize: '20px' }} />
            </ListItem>
          </Link>
        </List>
        <UseAnimations animation={arrowUp} wrapperStyle={{ position: 'absolute', top: '20px', right: '20px' }} />
        <div style={{ position: 'absolute', top: '50px', right: '20px' }}>Eh follow me la</div>
      </div>
    </MuiDrawer>
  );
}

export default Drawer;