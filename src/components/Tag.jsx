import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

export const Tag = ({ content, recipe = false }) => {
  return (
    <div className='tag' style={recipe ? { backgroundColor: '#B0E0E6', color: '#008080' } : {}}>
      {content}
    </div>
  )
}

Tag.propTypes = {
  content: PropTypes.string,
  recipe: PropTypes.bool
}