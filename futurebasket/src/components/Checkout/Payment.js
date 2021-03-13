import { useStyles } from './styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Payment = () => {
  const classes = useStyles();

  return (
    <div className={classes.stepContainer}>
      <Button
        variant='outlined'
        color='secondary'
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add New Payment method
      </Button>
    </div>
  );
};

export default Payment;
