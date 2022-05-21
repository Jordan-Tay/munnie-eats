import { Card } from '../components';
import { useMediaQuery, useTheme, Grid, TextField, InputAdornment, Autocomplete, Pagination, Chip, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import DoneIcon from '@mui/icons-material/Done'

const PAGE_SIZE = 12;

export const FoodList = ({ list, tags, tagsCount, label, placeholder }) => {
  const [tagsFilter, setTagsFilter] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  let filteredList = list.filter(({ title, tags }) => (!tagsFilter || tagsFilter.every(tag => tags.includes(tag))) && title.toLowerCase().includes(searchFilter.toLowerCase()));
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

  const filterTag = (tags) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.delete('tag');
    if (tags) {
      tags.forEach(tag => updatedSearchParams.append('tag', tag));
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
    setTagsFilter(searchParams.getAll('tag') || []);
    setSearchFilter(searchParams.get('search') || '');
    let parsedPage = parseInt(searchParams.get('page') || '1');
    setPage(parsedPage > pages ? pages : parsedPage < 1 ? 1 : parsedPage);
  }, [pages, searchParams]);

  return (
    <div style={{ margin: md ? '15px 80px' : sm ? '15px 40px' : '15px' }}>
      <div style={{ marginBottom: '15px' }}>
        <Grid container spacing={2} justifyContent='space-between'>
          <Grid item md={3} sm={4} xs={12} sx={{ height: '64px' }}>
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
          <Grid item md={3} sm={4} xs={12} sx={{ height: '64px' }}>
            <Autocomplete 
              multiple 
              size='small'
              value={searchParams.getAll('tag') || null} 
              onChange={(event, newValue) => filterTag(newValue)} 
              options={tags}
              // options={[...tags].sort((a, b) => {
              //   let ai = tagsFilter.indexOf(a);
              //   ai = ai === -1 ? tagsFilter.length + tags.indexOf(a) : ai;
              //   let bi = tagsFilter.indexOf(b);
              //   bi = bi === -1 ? tagsFilter.length + tags.indexOf(b) : bi;
              //   return ai - bi;
              // })}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Box
                    component={DoneIcon}
                    sx={{ width: 17, mr: '5px' }}
                    style={{
                      visibility: selected ? 'visible' : 'hidden',
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                    }}
                  />
                  <Box style={{ flexGrow: 1 }}>
                    {option}
                  </Box>
                  <Box component={Chip} label={tagsCount[`${option}`]} size='small' />
                </li>
              )}
              disableCloseOnSelect
              limitTags={1}
              sx={{ position: 'relative', zIndex: 1, height: '100%' }}
              renderInput={(params) => 
                <TextField {...params} 
                  value={tagsFilter} 
                  label="Tags" 
                  variant='standard' 
                  color='secondary' 
                  placeholder={tagsFilter.length === 0 ? 'All' : ''} 
                  focused 
                  sx={{ width: '100%', position: 'absolute', top: '3px', backgroundColor: 'var(--primary)' }} />} />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2}>
        {filteredList.slice(startIndex, startIndex + PAGE_SIZE).map(item => <Card key={item.id} {...item} />)}
      </Grid>
      {pages > 1 && 
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
          <Pagination color='secondary' shape='rounded' variant='outlined' size='large' count={pages} onChange={(event, value) => selectPage(value)} page={page} />
        </div>}
    </div >
  );
}

export default FoodList;
