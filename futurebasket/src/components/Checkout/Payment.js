import { useStyles } from './styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Payment = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState('UPI');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.paymentContainer}>
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='address'
          name='address'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value='UPI' control={<Radio />} label='UPI' />
          <FormControlLabel
            value='cards'
            control={<Radio />}
            label='Credit / Debit / ATM cards'
          />
          <FormControlLabel
            value='cod'
            control={<Radio />}
            label='Cash On Delivery'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Payment;
