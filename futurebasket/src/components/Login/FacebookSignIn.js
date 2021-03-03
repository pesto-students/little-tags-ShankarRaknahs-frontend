import ButtonPrimary from '../Button/Button';
import COLORS from '../../config/colors.config';
import useFormatMessage from '../../i18n/useFormatMessage';

const FacebookSignIn = ({ action }) => {
  return (
    <ButtonPrimary btnClr={COLORS.FACEBOOK} textClr={COLORS.LIGHT}>
      {action} 
      &nbsp;
      {useFormatMessage("auth.with", "with")}
      &nbsp;
      <span> Facebook </span>

    </ButtonPrimary>
  );
};

export default FacebookSignIn;
