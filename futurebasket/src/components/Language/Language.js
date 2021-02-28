import React from 'react';
import { IconButton, Select, FormControl } from '@material-ui/core';

import { Language } from '@material-ui/icons/';

import { useStyles } from './styles';
import APP from '../../config/app.config';

const LanguageInt = ({ id }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    language: 'en',
    name: 'English',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <div>
          <IconButton aria-label='Language selector' color='inherit'>
            <Language
              className={
                id === APP.DESKTOP_ID ? classes.icon : classes.mobileicon
              }
            />
          </IconButton>
          <Select
            native
            value={state.language}
            onChange={handleChange}
            label='Language'
            className={classes.icon}
            inputProps={{
              name: 'language',
              id: 'outlined-age-native-simple',
            }}
          >
            <option value={10}>
              {id === APP.DESKTOP_ID ? 'English' : 'En'}
            </option>
            <option value={20}>
              {id === APP.DESKTOP_ID ? 'Spanish' : 'Es'}
            </option>
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

export default LanguageInt;
