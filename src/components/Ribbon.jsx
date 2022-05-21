import React from "react";
import './Ribbon.css'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Tooltip, useMediaQuery, useTheme } from "@mui/material";
import classNames from "classnames";
import { startCase } from "lodash";

export const Ribbon = ({ content, sticker = false }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  let recipe = content === 'recipe';
  let instagram = content === 'instagram';

  return (
    <Tooltip title={startCase(content)} placement={sticker ? 'bottom' : 'right'}>
      <div className={classNames({
        'sticker': sticker
      })} style ={sticker ? {
        backgroundColor: recipe 
          ? 'var(--recipe-primary-alpha)' 
          : instagram
            ? 'var(--primary-alpha)'
            : '#dddddd80'
      } : {}}>
        {recipe && <MenuBookTwoToneIcon htmlColor={sticker ? 'var(--recipe-secondary)' : 'var(--recipe-primary)'} fontSize={sm ? 'medium' : 'large'} />}
        {instagram && <InstagramIcon htmlColor={sticker ? 'var(--secondary)' : 'var(--primary)'} fontSize={sm ? 'medium' : 'large'} />}
      </div>
    </Tooltip>
  );
}

export default Ribbon;