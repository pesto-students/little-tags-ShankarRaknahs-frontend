import TextField from '@material-ui/core/TextField';
import ButtonPrimary from '../../components/Button/Button';
import COLORS from '../../config/colors.config';
import { useStyles } from './styles';
import { FormattedMessage, useIntl } from 'react-intl';

const PhoneAuth = ({ action }) => {
  const classes = useStyles();

  return (
    <>
      <h3> 
        <FormattedMessage id = "auth.signInMobile" defaultMessage = "Sign in using Mobile" />
      </h3>
      <TextField
        fullWidth
        size='small'
        label= {useIntl().formatMessage({id: "auth.enterThePhoneNumber", defaultMessage: "Enter the Phone Number"})}
        variant='outlined'
        name='phone'
        className={classes.phone}
      />
      <ButtonPrimary btnClr={COLORS.ACTION} textClr={COLORS.LIGHT}>
        {' '}
        {action}{' '}
      </ButtonPrimary>
    </>
  );
};

export default PhoneAuth;
