import { Tag } from '.';
import PropTypes from "prop-types";
import { Grid, ImageListItem, ImageListItemBar } from '@mui/material';
import './Card.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Card = props => {
  const { id, image, title, tags, recipeAvailable } = props;

  return (
    <Grid item xs={12} sm={6} md={3}>
    <Link to={`/${id}`}>
      <div className='card-container'>
        <img className='card-image' src={image} alt={title} />
        <div className='card-content'>
          {title && <div className='card-title'>
            {title}
          </div>}
          {tags && tags.length && <div className='card-tags'>
            {tags.map(tag => (
              <Tag content={tag} />
            ))}
          {recipeAvailable && <Tag content='Recipe Available' recipe />}
          </div>}
        </div>
      </div>
    </Link>
    </Grid>
  );
}

Card.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  recipeAvailable: PropTypes.bool
}

export default Card;