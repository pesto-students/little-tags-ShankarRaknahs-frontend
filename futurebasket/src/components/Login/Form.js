import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { TabPanel, a11yProps } from './utilities/utilities';

import Google from '../Login/GoogleSignIn';
import Facebook from '../Login/FacebookSignIn';
import useStyles from './styles';

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
          <Tab label='LOGIN' {...a11yProps(0)} />
          <Tab label='NEW USER' {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Google action={'sign in'} />
        <Facebook action={'Sign in'} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Google action={'sign up'} className={classes.btn} />
        <Facebook action={'Sign up'} className={classes.btn} />
      </TabPanel>
    </>
  );
};

export default LoginForm;
