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
                {activeStep === steps.length - 1 ? (
                  <Button
                    color='secondary'
                    variant='outlined'
                    href='/'
                    className={classes.button}
                  >
                    Continue Shopping
                  </Button>
                ) : (
                  <>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Continue
                    </Button>
                  </>
                )}
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Process;
