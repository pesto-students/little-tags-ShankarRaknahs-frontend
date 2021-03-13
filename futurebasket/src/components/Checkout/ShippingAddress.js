import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { addresses } from '../Modals/address.modal';

import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const SavedAddress = ({ address }) => {
  const classes = useStyles();
  return (
    <div className={classes.addressContainer}>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='subtitle1'>{address.tag}</Typography>
          <Typography variant='subtitle2'>
            {address.name}, {address.address}, {address.city}-{address.pincode}
          </Typography>
          <Typography variant='subtitle2'>
            Mobile-{address.mobileNumber}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const ShippingAddress = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(addresses[0].tag);

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
          {addresses.map((address) => {
            return (
              <FormControlLabel
                value={address.tag}
                control={<Radio />}
                label={<SavedAddress address={address} />}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Button
        variant='text'
        color='primary'
        className={classes.actionBtn}
        startIcon={<AddIcon />}
      >
        Add new address
      </Button>
    </div>
  );
};

export default ShippingAddress;
