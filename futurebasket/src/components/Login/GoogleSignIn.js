import useFormatMessage from '../../i18n/useFormatMessage';
import { GoogleLoginButton } from 'react-social-login-buttons';

const GoogleSignIn = ({ action }) => {
  return (
    <GoogleLoginButton style={{ marginBottom: '10%' }}>
      {action}
      &nbsp;
      {useFormatMessage('auth.with', 'with')}
      &nbsp;
      <span>Google</span>
    </GoogleLoginButton>
  );
};

export default GoogleSignIn;
