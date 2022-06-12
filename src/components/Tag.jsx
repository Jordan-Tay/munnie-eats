import React from 'react';
import PropTypes from 'prop-types';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import './Tag.css';

export const Tag = ({ content, recipe = false, onClick }) => {
  return (
    <div className='tag' onClick={onClick} style={recipe ? { cursor: 'default', borderColor: 'var(--recipe-primary-alpha)', backgroundColor: 'var(--recipe-primary-alpha)' } : {}}>
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
