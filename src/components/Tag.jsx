import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

export const Tag = ({ content, recipe = false }) => {
  return (
    <div className='tag' style={recipe ? { backgroundColor: 'var(--recipe-primary)', color: 'var(--recipe-secondary)' } : {}}>
      {content}
    </div>
  )
}

Tag.propTypes = {
  content: PropTypes.string,
  recipe: PropTypes.bool
}