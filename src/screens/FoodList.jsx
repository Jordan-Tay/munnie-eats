import { Card } from '../components';
import { useMediaQuery, useTheme, Grid, TextField, InputAdornment, Autocomplete, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const PAGE_SIZE = 12;

export const FoodList = ({ list, tags, label, placeholder }) => {
  const [tagFilter, setTagFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  let filteredList = list.filter(({ title, tags }) => (!tagFilter || tags.includes(tagFilter)) && title.toLowerCase().includes(searchFilter.toLowerCase()));
  let startIndex = (page - 1) * PAGE_SIZE;
  let pages = Math.ceil(filteredList.length / PAGE_SIZE);

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

  const selectPage = (page) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      updatedSearchParams.delete('page');
    } else {
      updatedSearchParams.set('page', page);
    }
    setSearchParams(updatedSearchParams.toString());
  }

  useEffect(() => {
    setTagFilter(searchParams.get('tag') || '');
    setSearchFilter(searchParams.get('search') || '');
    let parsedPage = parseInt(searchParams.get('page') || '1');
    setPage(parsedPage > pages ? pages : parsedPage < 1 ? 1 : parsedPage);
  }, [pages, searchParams]);

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
            <Autocomplete blurOnSelect={true} value={searchParams.get('tag') || null} onChange={(event, newValue) => filterTag(newValue)} options={tags} renderInput={(params) => <TextField {...params} value={tagFilter} label="Tag" variant='standard' color='secondary' placeholder='All' focused sx={{ width: '100%' }} />} />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2}>
        {filteredList.slice(startIndex, startIndex + PAGE_SIZE).map(item => <Card key={item.id} {...item} />)}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
        {pages > 1 && <Pagination color='secondary' shape='rounded' variant='outlined' size='large' count={pages} onChange={(event, value) => selectPage(value)} page={page} />}
      </div>
    </div >
  );
}

export default FoodList;
