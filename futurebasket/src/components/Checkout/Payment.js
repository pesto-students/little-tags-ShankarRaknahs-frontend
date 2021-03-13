import { useStyles } from './styles';
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Card, CardContent, Typography } from '@material-ui/core';

const Payment = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState('UPI');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.stepContainer}>
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='address'
          name='address'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value='UPI'
            control={<Radio />}
            label={
              <Card variant='outlined' className={classes.paymentContainer}>
                <Typography variant='subtitle2'>UPI</Typography>
              </Card>
            }
          />

          <FormControlLabel
            value='cards'
            control={<Radio />}
            label={
              <Card variant='outlined' className={classes.paymentContainer}>
                <Typography variant='subtitle2'>
                  Credit / Debit / ATM cards
                </Typography>
              </Card>
            }
          />
          <FormControlLabel
            value='cod'
            control={<Radio />}
            label={
              <Card variant='outlined' className={classes.paymentContainer}>
                <Typography variant='subtitle2'>Cash On Delivery</Typography>
              </Card>
            }
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Payment;
