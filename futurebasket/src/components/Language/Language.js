import React, { useEffect } from 'react';
import { IconButton, Select, FormControl } from '@material-ui/core';
import useLocalStorage from '../../hooks/useLocalStorage';

import { Language } from '@material-ui/icons/';

import { useStyles } from './styles';
import APP from '../../config/app.config';
import { useDispatch } from 'react-redux'
import { setEnglish, setSpanish } from '../../actions/locale'

const LanguageInt = ({ id }) => {
  const classes = useStyles();

  const [currentLocale, setLocale] = useLocalStorage('language', 'en');

  const dispatch = useDispatch();

  function updateLocaleInStore(locale) {
    if(locale === 'es')
      dispatch(setEnglish());
    else 
      dispatch(setSpanish());
  }

  useEffect(() => {
    updateLocaleInStore(currentLocale);
  }, [])

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLocale(selectedLang);
    updateLocaleInStore(selectedLang);
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
            value={currentLocale}
            onChange={handleChange}
            label='Language'
            className={classes.icon}
            inputProps={{
              name: 'language',
              id: 'outlined-age-native-simple',
            }}
          >
            <option value = "en">
              {id === APP.DESKTOP_ID ? 'English' : 'En'}
            </option>
            <option value = "es">
              {id === APP.DESKTOP_ID ? 'Spanish' : 'Es'}
            </option>
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

export default LanguageInt;
