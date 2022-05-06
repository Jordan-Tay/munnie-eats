import { Button, Grid, InputAdornment, TextField, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, HomeCard } from "../components";
import { all } from '../data';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div style={{ margin: md ? '15px 80px' : sm ? '15px 40px' : '15px' }}>
      <div style={{ marginBottom: '15px' }}>
      <Grid container spacing={2}>
        {all.map(item => <HomeCard {...item} />)}
      </Grid>
      </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} height='80px'>
            <Link to='/all'>
              <Button variant='contained' color='secondary' fullWidth sx={{ height: '100%' }} size='large'>See All Posts</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={8} height='80px'>
            <TextField
              placeholder='Search Posts, e.g. Eclair'
              // variant='filled'
              focused
              sx={{
                display: 'grid',
                height: '100%'
              }}
              color='secondary'
              fullWidth
              // size='medium'
              margin='none'
              label='Search'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Link to={`/all?search=${searchFilter}`} style={{ display: 'flex', alignItems: 'center' }}>
                      <SearchIcon />
                    </Link>
                  </InputAdornment>
                ),
              }}
              onChange={e => setSearchFilter(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  navigate(`/all?search=${searchFilter}`);
                }
              }}
            />
          </Grid>
        </Grid>
    </div>
  );
}

export default Home;