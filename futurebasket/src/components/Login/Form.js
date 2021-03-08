import React from 'react';
import { Paper, Tabs, Tab, Divider } from '@material-ui/core';
import { TabPanel, a11yProps } from './utilities/utilities';

import Google from '../Login/GoogleSignIn';
import Facebook from '../Login/FacebookSignIn';
import PhoneAuth from '../Login/PhoneAuth';

import { useStyles } from './styles';
import useFormatMessage from '../../i18n/useFormatMessage';

const LoginForm = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='User Authentication'
          textColor='secondary'
          centered
        >
          <Tab
            label={useFormatMessage('auth.login', 'Login')}
            {...a11yProps(0)}
          />
          <Tab
            label={useFormatMessage('auth.newUser', 'Sign Up')}
            {...a11yProps(1)}
          />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Google action={useFormatMessage('auth.signIn', 'LogIn')} />
        <Facebook action={useFormatMessage('auth.signIn', 'LogIn')} />
        <Divider />
        <p align='center'>or</p>
        <Divider />
        <PhoneAuth
          action={useFormatMessage('auth.requestOtp', 'Request OTP')}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Google
          action={useFormatMessage('auth.signUp', 'Continue')}
          className={classes.btn}
        />
        <Facebook
          action={useFormatMessage('auth.signUp', 'Continue')}
          className={classes.btn}
        />
        <Divider />
        <p align='center'>or</p>
        <Divider />
        <PhoneAuth
          action={useFormatMessage('auth.requestOtp', 'Request OTP')}
        />
      </TabPanel>
    </>
  );
};

export default LoginForm;
