import { ExpandLess, ExpandMore, Restaurant, Timer } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import { Collapse, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Snackbar, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from '../data';

export const Recipe = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [ingredientsOpen, setIngredientsOpen] = useState([]);

  useEffect(() => {
    let newItem = data.find(({ id: _id }) => _id === id);
    let { ingredients } = newItem;
    if (ingredients && !Array.isArray(ingredients)) {
      setIngredientsOpen(Array(Object.keys(ingredients).length).fill(true));
    }
    setItem(newItem); 
  }, [id]);

  if (!item) {
    return <div />;
  }

  const { title, tags, image, prepTime, totalTime, portions, ingredients, instructions } = item;

  return (
    <div style={{ margin: '15px' }}>
      <Snackbar autoHideDuration={2000} open={open} onClose={() => setOpen(false)} message="Link copied to clipboard" />
      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={8} md={6}>
          <img style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} src={image} alt={title} />
          <div className="flex">
            <h1 style={{ marginRight: '10px' }}>{title}</h1>
            <Tooltip title="Share" placement="top">
              <IconButton onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setOpen(true);
              }}>
                <ShareIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '15px' }}>
            {prepTime && <div className='subtitle-item'>
              <Timer sx={{ marginRight: '5px' }} />
              <span className='subtitle-text'>Prep time: {prepTime}</span>
            </div>}
            {totalTime && <div className='subtitle-item'>
              <Timer sx={{ marginRight: '5px' }} />
              <span className='subtitle-text'>Total time: {totalTime}</span>
            </div>}
            {portions && <div className='subtitle-item'>
              <Restaurant sx={{ marginRight: '5px' }} />
              <span className='subtitle-text'>Yield: {portions}</span>
            </div>}
          </div>
          {ingredients && 
            <div className='recipe-section'>
              <Divider />
              <h2>Ingredients</h2>
              {Array.isArray(ingredients) 
                ? <List disablePadding sx={{ listStyle: 'inside' }}>{ingredients.map(ingredient => <ListItem sx={{ display: 'list-item' }}>{ingredient}</ListItem>)}</List>
                : Object.keys(ingredients).map((part, i) => 
                  <div>
                    <ListItemButton onClick={() => {
                      let newIngredientsOpen = ingredientsOpen;
                      newIngredientsOpen[i] = !newIngredientsOpen[i];
                      setIngredientsOpen([...newIngredientsOpen]);
                    }}>
                      <ListItemText primaryTypographyProps={{ fontSize: '20px' }}>
                        {part}
                      </ListItemText>
                      {ingredientsOpen[i] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={ingredientsOpen[i]} unmountOnExit>
                      <List disablePadding>
                        {ingredients[part].map(ingredient => <ListItemText sx={{ pl: 4 }} primary={ingredient} />)}
                      </List>
                    </Collapse>
                  </div>)}
            </div>}
          {instructions && 
            <div>
              <Divider />
              <h2>Instructions</h2>
              <List disablePadding sx={{ listStyle: 'inside' }}>
                {instructions.map(instruction => <ListItem sx={{ display: 'list-item' }}>{instruction}</ListItem>)}
              </List>
            </div>}
        </Grid>
      </Grid>
    </div>
  ); 
}

export default Recipe;