import { useStyles } from './styles';

const { Typography } = require('@material-ui/core');

const OrderReview = () => {
  const classes = useStyles();

  return (
    <div className={classes.stepContainer}>
      <Typography variant='h6'>Thank you for Shopping.</Typography>
    </div>
  );
};

export default OrderReview;
