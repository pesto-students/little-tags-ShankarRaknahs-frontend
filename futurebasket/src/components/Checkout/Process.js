import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import StepContent from '@material-ui/core/StepContent';

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
  const [activeStep, setActiveStep] = React.useState(1);
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
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(activeStep)}

              <div className={classes.stepAction}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
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
                    Pay and Conform Order
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
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity='success'>
          Order Placed Successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Process;