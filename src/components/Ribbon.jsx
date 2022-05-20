import React from "react";
import './Ribbon.css'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { Tooltip, useMediaQuery, useTheme } from "@mui/material";
import classNames from "classnames";

export const Ribbon = ({ sticker }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <Tooltip title='Recipe' placement={sticker ? 'bottom' : 'right'}>
      <div className={classNames({
        'sticker': sticker
      })}>
        <MenuBookTwoToneIcon htmlColor={sticker ? 'var(--recipe-secondary)' : 'var(--recipe-primary)'} fontSize={sm ? 'medium' : 'large'} />
      </div>
    </Tooltip>
  );
}

export default Ribbon;