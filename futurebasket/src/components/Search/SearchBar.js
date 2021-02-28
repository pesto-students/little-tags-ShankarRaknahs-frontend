import React from 'react';
import { useStyles } from './styles';
import { InputBase } from '@material-ui/core';

import { Search } from '@material-ui/icons/';

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
