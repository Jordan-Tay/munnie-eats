import PropTypes from "prop-types";
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import './HomeCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Ribbon } from ".";

const COLUMN_SIZE = 4;
const ROW_GAP = 16

export const HomeCard = props => {
  const { id, image, title, homeTag, tags, homeDescription, recipeAvailable, columns, rows } = props;
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  let ROW_SIZE = sm ? 89 : 123;

  return (
    <Grid item xs={12} sm={COLUMN_SIZE * columns}>
      <Link to={`/${id}`}>
        <div className='homecard-container'>
          <div className='homecard-image-container' style={homeDescription ? { background: `linear-gradient(to bottom, ${recipeAvailable ? '#19547bcc, #ffd89bee' : '#faaca8cc, #ddd6f3ee'})` } : {}}>
            <img height={sm || md ? `${ROW_SIZE * rows + ROW_GAP * (rows - 1)}px` : '400px'} className={classNames('homecard-image', { 'animate-homecard-image': sm || md })} src={image} alt={title} />
          </div>
          {!homeDescription && <div className='homecard-content'>
            {(homeTag || (tags && tags.length)) && <div className='homecard-tag' style={{ backgroundColor: recipeAvailable ? 'var(--recipe-secondary-alpha)' : '#ffffff70', color: recipeAvailable ? 'white' : 'black', fontSize: sm ? 'var(--font-xs)' : 'var(--font-sm)' }}>{homeTag || tags[0]}</div>}
            <div className='homecard-title-container' style={{ backgroundColor: recipeAvailable ? 'var(--recipe-primary-alpha)' : 'rgba(0,0,0,0.5)' }}>
              {title && <div className='homecard-title' style={{ color: recipeAvailable ? 'var(--recipe-secondary)' : 'white', fontSize: sm ? 'var(--font-md)' : 'var(--font-lg)' }}>
                {title}
              </div>}
            </div>
          </div>}
          {homeDescription && <div className='homecard-description-container'>
            {recipeAvailable && <Ribbon content='recipe' />}
            {title && <div className='homecard-tag' style={{ backgroundColor: recipeAvailable ? 'var(--recipe-primary-alpha)' : 'rgba(0,0,0,0.5)', color: recipeAvailable ? 'var(--recipe-secondary)' : 'white', fontSize: sm ? 'var(--font-xs)' : 'var(--font-sm)' }}>
              {title}
            </div>}
            <div className='homecard-description homecard-title' style={{ color: recipeAvailable ? 'white' : 'black', fontSize: sm ? '3vw' : 'var(--font-lg)' }}>
              {homeDescription}
            </div>
          </div>}
          {!homeDescription && recipeAvailable && <Ribbon content='recipe' sticker />}
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
  columns: PropTypes.number,
  rows: PropTypes.number,
}

export default HomeCard;
