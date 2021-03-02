import ButtonPrimary from '../Button/Button';
import COLORS from '../../config/colors.config';

const FacebookSignIn = ({ action }) => {
  return (
    <ButtonPrimary btnClr={COLORS.FACEBOOK} textClr={COLORS.LIGHT}>
      {' '}
      {action} using Facebook{' '}
    </ButtonPrimary>
  );
};

export default FacebookSignIn;
