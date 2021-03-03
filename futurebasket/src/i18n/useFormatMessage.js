import { FormattedMessage, useIntl } from "react-intl";

const useFormatMessage = (message, defaultMessage) => {
    const intl = useIntl()
    return (
      <span title = {intl.formatMessage({id: message, defaultMessage})}>
        <FormattedMessage id={message} defaultMessage = {defaultMessage} />
      </span>
    )
  }
  
  export default useFormatMessage;