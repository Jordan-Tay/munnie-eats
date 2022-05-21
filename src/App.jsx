import React, { useRef } from 'react';
import './App.css';
import { Navbar, Card, Drawer } from './components';
import { createTheme, responsiveFontSizes } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { all, recipes, recipeTags, recipeTagsCount, tags, tagsCount } from './data';
import { Route, Routes } from 'react-router-dom';
import { About, FoodList, Recipe, Home, ErrorScreen } from './screens';

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
  const navRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Drawer isOpen={menuOpen} setIsOpen={setMenuOpen} paddingTop={navRef.current ? navRef.current.getBoundingClientRect().bottom : '0px'} />
        <Navbar navRef={navRef} menuOpen={menuOpen} toggleMenu={setMenuOpen} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/all' element={<FoodList list={all} tags={tags} tagsCount={tagsCount} label='Search' placeholder='Search Posts' />} />
          <Route path='/recipes' element={<FoodList list={recipes} tags={recipeTags} tagsCount={recipeTagsCount} label='Recipe' placeholder='Search Recipes' />} />
          <Route path='/404' element={<ErrorScreen />} />
          <Route path='/:id' element={<Recipe />} />
          <Route path='*' element={<ErrorScreen />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;