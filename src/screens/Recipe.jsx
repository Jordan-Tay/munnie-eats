import { ArrowBackIosNew, ArrowForwardIos, ExpandLess, ExpandMore, Restaurant, Timer } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import { Collapse, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Snackbar, Tooltip, useTheme, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { all, recipes } from '../data';

export const Recipe = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [ingredientsOpen, setIngredientsOpen] = useState([]);

  const navigate = useNavigate();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (!id) {
      return;
    }

    let newItem = all.find(({ id: _id }) => _id === id);

    if (!newItem) {
      navigate('/404');
      return;
    }

    setItem(newItem);

    let { ingredients } = newItem;
    if (ingredients && !Array.isArray(ingredients)) {
      setIngredientsOpen(Array(Object.keys(ingredients).length).fill(true));
    }
  }, [id, navigate]);

  if (!item) {
    return <div />;
  }

  const { title, image, prepTime, totalTime, portions, ingredients, instructions, recipeAvailable, recipeIndex } = item;

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
                ? <List disablePadding sx={{ listStyle: 'inside' }}>{ingredients.map((ingredient, i) => <ListItem key={i} sx={{ display: 'list-item' }}>{ingredient}</ListItem>)}</List>
                : Object.keys(ingredients).map((part, i) =>
                  <div key={i}>
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
                      <List disablePadding sx={{ listStyle: 'inside' }}>
                        {ingredients[part].map((ingredient, i) => <ListItem key={i} sx={{ display: 'list-item' }}>{ingredient}</ListItem>)}
                      </List>
                    </Collapse>
                  </div>)}
            </div>}
          {instructions &&
            <div>
              <Divider />
              <h2>Instructions</h2>
              <List disablePadding sx={{ listStyle: 'inside', listStyleType: 'decimal' }}>
                {instructions.map((instruction, i) => <ListItem key={i} sx={{ display: 'list-item' }}>{instruction}</ListItem>)}
              </List>
            </div>}
        </Grid>
      </Grid>
      {recipeAvailable && <Grid container alignItems='center' sx={{ margin: '15px 0px' }}>
        <Grid container item xs={6} justifyContent='flex-start' alignItems='center'>
          {recipeIndex > 0 &&
            <Link to={`/${recipes[recipeIndex - 1].id}`}>
              <div className='route-container route-left-container'>
                <div className={classNames({'route-left': sm || md})}>
                  <ArrowBackIosNew />
                </div>
                <div style={{ display: 'inline-block', position: 'relative', marginLeft: '10px' }}>
                  <div style={{ position: 'absolute', left: 0, whiteSpace: 'nowrap' }}>Previous Recipe</div>
                  <h2 style={{ textAlign: 'start' }}>{recipes[recipeIndex - 1].title}</h2>
                </div>
              </div>
            </Link>}
        </Grid>
        <Grid container item xs={6} justifyContent='flex-end' alignItems='center'>
          {recipeIndex < recipes.length - 1 &&
            <Link to={`/${recipes[recipeIndex + 1].id}`}>
              <div className='route-container route-right-container'>
                <div style={{ display: 'inline-block', position: 'relative', marginRight: '10px' }}>
                  <div style={{ position: 'absolute', right: 0, whiteSpace: 'nowrap' }}>Next Recipe</div>
                  <h2 style={{ textAlign: 'end' }}>{recipes[recipeIndex + 1].title}</h2>
                </div>
                <div className={classNames({'route-right': sm || md})}>
                  <ArrowForwardIos />
                </div>
              </div>
            </Link>}
        </Grid>
      </Grid>}
    </div>
  );
}

export default Recipe;
