import React, { useRef } from 'react';
import './App.css';
import { Navbar, Card } from './components';
import { Backdrop, createTheme, responsiveFontSizes } from '@mui/material';
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

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Backdrop sx={{ zIndex: 1 }} open={menuOpen} transitionDuration={800} onClick={() => setMenuOpen(false)} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
