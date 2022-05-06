import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Card, HomeCard } from "../components";
import { all } from '../data';

export const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div style={{ margin: matches ? '15px 80px' : '15px' }}>
      <Grid container spacing={2}>
        {all.map(item => <HomeCard {...item} />)}
      </Grid>
    </div>
  );
}

export default Home;