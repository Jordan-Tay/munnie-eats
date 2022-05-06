import { Tag } from '.';
import PropTypes from "prop-types";
import { Grid, ImageListItem, ImageListItemBar } from '@mui/material';
import './HomeCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomeCard = props => {
  const { id, image, title, homeTag, tags, description, recipeAvailable, size } = props;
  
  return (
    <Grid item xs={12} sm={size === 'large' ? 8 : 4}>
    <Link to={`/${id}`}>
      <div className='homecard-container'>
        <img className='homecard-image' src={image} alt={title} />
        <div className='homecard-content'>
        {(homeTag || (tags && tags.length)) && <div className='homecard-tag' style={{ backgroundColor: recipeAvailable ? '#00808070' : '#ffffff70', color: recipeAvailable ? 'white' : 'black' }}>{homeTag || tags[0]}</div>}
        <div className='homecard-title-container' style={{ backgroundColor: recipeAvailable ? '#B0E0E650' : 'rgba(0,0,0,0.5)' }}>
          {title && <div className='homecard-title' style={{ color: recipeAvailable ? '#008080' : 'white' }}>
            {title}
          </div>}
          {description && <div className='homecard-description'>
            {description}
          </div>}
          {/* {tags && tags.length && <div className='homecard-tags'>
            {tags.map(tag => (
              <Tag content={tag} />
            ))}
          {recipeAvailable && <Tag content='Recipe Available' recipe />}
          </div>} */}
        </div>
        </div>
      </div>
    </Link>
    </Grid>
  );
}

HomeCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  homeTag: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  recipeAvailable: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small'])
}

export default HomeCard;