import React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButton } from "@mui/material";

export const ThemeToggle = ({theme, setTheme}) => {
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';;
    setTheme(newTheme);
  }  

  return (
    <div>
      <IconButton onClick={switchTheme}>
        {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
}

export default ThemeToggle;