import React from 'react';
import './App.css';
import { Navbar, Card, Drawer } from './components';
import { createTheme, responsiveFontSizes } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { data } from './data';
import { Route, Routes } from 'react-router-dom';
import { About, Home, Recipe } from './screens';

let theme = createTheme({
  typography: {
    'fontFamily': 'Indie Flower'
  },
  palette: {
    primary: {
      main: '#ffe4e1'
    },
    secondary: {
      main: '#85144b'
    }
  },
})
theme = responsiveFontSizes(theme);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Drawer isOpen={menuOpen} setIsOpen={setMenuOpen} />
        <Navbar menuOpen={menuOpen} toggleMenu={setMenuOpen} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipes' element={<div>recipes</div>} />
          <Route path='/:id' element={<Recipe />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
