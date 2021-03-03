import ButtonPrimary from '../Button/Button';
import COLORS from '../../config/colors.config';
import useFormatMessage from "../../i18n/useFormatMessage";

const GoogleSignIn = ({ action }) => {
  return (
    <ButtonPrimary btnClr={COLORS.GOOGLE} textClr={COLORS.LIGHT}>
      {action}  
      &nbsp;
      {useFormatMessage("auth.with", "with")}
      &nbsp;
      <span> Google </span>
    </ButtonPrimary>
  );
};

export default GoogleSignIn;
