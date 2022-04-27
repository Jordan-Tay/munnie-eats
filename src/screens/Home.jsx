import { Card } from '../components';
import { Grid, TextField, InputAdornment, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { data, tags } from '../data';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
  const [tagFilter, setTagFilter] = useState('');
  const [recipeFilter, setRecipeFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const filterRecipe = (recipe) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (!recipe) {
      updatedSearchParams.delete('recipe');
    } else {
      updatedSearchParams.set('recipe', recipe);
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
    setRecipeFilter(searchParams.get('recipe') || '');
  }, [searchParams]);

  return (
    <div style={{ margin: '15px' }}>
      <div style={{ marginBottom: '15px' }}>
        <Grid container spacing={2} justifyContent='space-between'>
          <Grid item md={3} sm={4} xs={12}>
            <TextField
              placeholder='Search Recipes'
              variant='standard'
              color='secondary'
              onChange={e => filterRecipe(e.target.value)}
              defaultValue={searchParams.get('recipe') || ''}
              focused
              sx={{
                width: '100%',
              }}
              label='Recipe'
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
        {data.filter(({ title, tags }) => (!tagFilter || tags.includes(tagFilter)) && title.toLowerCase().includes(recipeFilter.toLowerCase())).map(item => <Card {...item} />)}
      </Grid>
    </div >
  );
}

export default Home;