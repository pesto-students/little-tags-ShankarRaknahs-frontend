import React from 'react';
import { IconButton, Select, FormControl } from '@material-ui/core';

import { Language } from '@material-ui/icons/';

import { useStyles } from './styles';
import APP from '../../config/app.config';
import { useSelector, useDispatch } from 'react-redux';
import { setEnglish, setSpanish } from '../../actions/locale';
import MenuItem from '@material-ui/core/MenuItem';

const LanguageInt = ({ id }) => {
  const classes = useStyles();

  const locale = useSelector((state) => state.localeReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem('language', selectedLang);
    if (selectedLang === 'es') dispatch(setEnglish());
    else dispatch(setSpanish());
  };

  return (
    <div>
      <FormControl
        variant='standard'
        margin='none'
        className={classes.formControl}
      >
        <div>
          <IconButton aria-label='Language selector' color='inherit'>
            <Language
              className={
                id === APP.DESKTOP_ID ? classes.icon : classes.mobileicon
              }
            />
          </IconButton>
          <Select
            color='secondary'
            value={locale}
            onChange={handleChange}
            label='Language'
            className={classes.icon}
            inputProps={{
              name: 'language',
              id: 'outlined-age-native-simple',
            }}
          >
            <MenuItem value='en'>
              {id === APP.DESKTOP_ID ? 'English' : 'En'}
            </MenuItem>
            <MenuItem value='es'>
              {id === APP.DESKTOP_ID ? 'Spanish' : 'Es'}
            </MenuItem>
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

export default LanguageInt;
