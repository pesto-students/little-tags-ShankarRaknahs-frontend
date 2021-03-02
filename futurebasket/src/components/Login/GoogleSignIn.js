import ButtonPrimary from '../Button/Button';
import COLORS from '../../config/colors.config';

const GoogleSignIn = ({ action }) => {
  return (
    <ButtonPrimary btnClr={COLORS.GOOGLE} textClr={COLORS.LIGHT}>
      {' '}
      {action} using Google{' '}
    </ButtonPrimary>
  );
};

export default GoogleSignIn;
