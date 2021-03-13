import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const ShippingAddress = () => {
  const classes = useStyles();

  return (
    <div className={classes.stepContainer}>
      <Button
        variant='outlined'
        color='secondary'
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add New Address
      </Button>
    </div>
  );
};

export default ShippingAddress;
