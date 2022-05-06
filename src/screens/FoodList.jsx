import { Card } from '../components';
import { useMediaQuery, useTheme, Grid, TextField, InputAdornment, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { recipes, recipeTags } from '../data';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const FoodList = ({ list, tags, label, placeholder }) => {
  const [tagFilter, setTagFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const filterList = (value) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (!value) {
      updatedSearchParams.delete('search');
    } else {
      updatedSearchParams.set('search', value);
    }
    setSearchParams(updatedSearchParams.toString());
  }

  const filterTag = (tag) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (!tag) {
      updatedSearchParams.delete('tag');
    } else {
      updatedSearchParams.set('tag', tag);
    }
    setSearchParams(updatedSearchParams.toString());
  }

  useEffect(() => {
    setTagFilter(searchParams.get('tag') || '');
    setSearchFilter(searchParams.get('search') || '');
  }, [searchParams]);

  return (
    <div style={{ margin: md ? '15px 80px' : sm ? '40px' : '15px' }}>
      <div style={{ marginBottom: '15px' }}>
        <Grid container spacing={2} justifyContent='space-between'>
          <Grid item md={3} sm={4} xs={12}>
            <TextField
              placeholder={placeholder}
              variant='standard'
              color='secondary'
              onChange={e => filterList(e.target.value)}
              defaultValue={searchParams.get('search') || ''}
              focused
              fullWidth
              label={label}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Autocomplete defaultValue={searchParams.get('tag') || ''} onChange={(event, newValue) => filterTag(newValue)} options={tags} renderInput={(params) => <TextField {...params} value={tagFilter} label="Tag" variant='standard' color='secondary' placeholder='All' focused sx={{ width: '100%' }} />} />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2}>
        {list.filter(({ title, tags }) => (!tagFilter || tags.includes(tagFilter)) && title.toLowerCase().includes(searchFilter.toLowerCase())).map(item => <Card {...item} />)}
      </Grid>
    </div >
  );
}

export default FoodList;