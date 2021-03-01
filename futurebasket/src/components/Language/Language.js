import React from 'react';
import { IconButton, Select, FormControl } from '@material-ui/core';

import { Language } from '@material-ui/icons/';

import { useStyles } from './styles';
import APP from '../../config/app.config';
import { useSelector, useDispatch } from 'react-redux'
import { setEnglish, setSpanish } from '../../actions/locale'

const LanguageInt = ({ id }) => {
  const classes = useStyles();

  const locale = useSelector((state) => state.localeReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    if(selectedLang === 'Es')
      dispatch(setEnglish());
    else 
      dispatch(setSpanish());
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
            value={locale}
            onChange={handleChange}
            label='Language'
            className={classes.icon}
            inputProps={{
              name: 'language',
              id: 'outlined-age-native-simple',
            }}
          >
            <option value = "En">
              {id === APP.DESKTOP_ID ? 'English' : 'En'}
            </option>
            <option value = "Es">
              {id === APP.DESKTOP_ID ? 'Spanish' : 'Es'}
            </option>
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

export default LanguageInt;
