import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Card, HomeCard } from "../components";
import { all } from '../data';

export const Home = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ margin: md ? '15px 80px' : sm ? '15px 40px' : '15px' }}>
      <Grid container spacing={2}>
        {all.map(item => <HomeCard {...item} />)}
      </Grid>
    </div>
  );
}

export default Home;