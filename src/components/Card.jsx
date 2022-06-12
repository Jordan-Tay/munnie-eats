import { Tag } from '.';
import PropTypes from "prop-types";
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import './Card.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

export const Card = props => {
  const { id, image, title, tags, recipeAvailable } = props;

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={3}>
    <Link to={`/${id}`}>
      <div className='card-container' style={recipeAvailable ? {} : {}}>
        <img className='card-image' src={image} alt={title} />
        <div className='card-content'>
          {title && <div className='card-title'>
            {title}
          </div>}
          {tags && tags.length && 
            <div className='card-tags'>
              {tags.map(tag => (
                <Tag key={tag} content={tag} onClick={e => {
                  e.preventDefault();
                  navigate(`/all?tag=${tag}`);
                }} />
              ))}
              {recipeAvailable && <Tag recipe onClick={e => e.preventDefault()} />}
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
