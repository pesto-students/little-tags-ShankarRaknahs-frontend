import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { TabPanel, a11yProps } from './utilities/utilities';

import Google from '../Login/GoogleSignIn';
import Facebook from '../Login/FacebookSignIn';
import PhoneAuth from '../Login/PhoneAuth';

import { useIntl } from 'react-intl';
import { useStyles } from './styles';

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
          <Tab label = { useIntl().formatMessage({id:"components.drawer.login", defaultMessage: "Login"}) } {...a11yProps(0)} />
          <Tab label = { useIntl().formatMessage({id:"components.drawer.newUser", defaultMessage: "Sign Up"}) } {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Google action = { useIntl().formatMessage({id:"components.drawer.signIn", defaultMessage: "Sign In"})}  />
        <Facebook action = { useIntl().formatMessage({id:"components.drawer.signIn", defaultMessage: "Sign In"})}  />
        <PhoneAuth action = { useIntl().formatMessage({id:"components.drawer.requestOtp", defaultMessage: "Request OTP"})} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Google action = { useIntl().formatMessage({id:"components.drawer.signUp", defaultMessage: "Sign Up"})}  className={classes.btn} />
        <Facebook action = { useIntl().formatMessage({id:"components.drawer.signUp", defaultMessage: "Sign Up"})} className={classes.btn} />
        <PhoneAuth action = { useIntl().formatMessage({id:"components.drawer.requestOtp", defaultMessage: "Request OTP"})} />
      </TabPanel>
    </>
  );
};

export default LoginForm;
