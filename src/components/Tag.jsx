import React from 'react';
import PropTypes from 'prop-types';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import './Tag.css';

export const Tag = ({ content, recipe = false }) => {
  return (
    <div className='tag' style={recipe ? { backgroundColor: 'var(--recipe-primary)' } : {}}>
      {!recipe 
        ? content 
        : <MenuBookTwoToneIcon htmlColor='var(--recipe-secondary)' fontSize='small' />}
    </div>
  )
}

Tag.propTypes = {
  content: PropTypes.string,
  recipe: PropTypes.bool
}
