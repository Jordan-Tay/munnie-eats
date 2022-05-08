import { Tag } from '.';
import PropTypes from "prop-types";
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import './Card.css';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Card = props => {
  const { id, image, title, tags, recipeAvailable } = props;

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid item xs={12} sm={6} md={3}>
    <Link to={`/${id}`}>
      <div className='card-container'>
        <img className={classNames('card-image', {'animate-card-image': sm || md})} src={image} alt={title} />
        <div className={classNames('card-content', {'animate-card-content': sm || md})}>
          {title && <div className='card-title'>
            {title}
          </div>}
          {tags && tags.length && <div className='card-tags'>
            {tags.map(tag => (
              <Tag key={tag} content={tag} />
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
