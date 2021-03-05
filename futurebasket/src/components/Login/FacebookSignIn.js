import useFormatMessage from '../../i18n/useFormatMessage';
import { FacebookLoginButton } from 'react-social-login-buttons';

const FacebookSignIn = ({ action }) => {
  return (
    <FacebookLoginButton style={{ marginBottom: '10%' }}>
      {action}
      &nbsp;
      {useFormatMessage('auth.with', 'with')}
      <span> Facebook </span>
    </FacebookLoginButton>
  );
};

export default FacebookSignIn;
