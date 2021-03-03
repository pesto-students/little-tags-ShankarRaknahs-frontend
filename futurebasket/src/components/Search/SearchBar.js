import React from 'react';
import { useStyles } from './styles';
import { Paper, IconButton, InputBase } from '@material-ui/core';

import { Search } from '@material-ui/icons/';

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search...'
        inputProps={{ 'aria-label': 'Search for products' }}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
