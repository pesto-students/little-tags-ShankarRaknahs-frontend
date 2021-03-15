import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import ShippingAddress from './ShippingAddress';
import Payment from './Payment';
import OrderReview from './OrderReview';
import { useStyles } from './styles';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function getSteps() {
  return ['Shipping Address', 'Payment Details', 'Review your order'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ShippingAddress />;
    case 1:
      return <Payment />;
    case 2:
      return <OrderReview />;
    default:
      return 'Unknown step';
  }
}

const Process = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        className={classes.stepperContainer}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className={classes.stepperLabel}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}

        <div className={classes.stepAction}>
          <Button
            variant='outlined'
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            GO back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              color='secondary'
              variant='contained'
              onClick={handleClick({
                vertical: 'bottom',
                horizontal: 'right',
              })}
              className={classes.button}
            >
              Pay and conform Order
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              onClick={handleNext}
              className={classes.button}
            >
              Continue
            </Button>
          )}
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity='success'>
          Order placed successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Process;
