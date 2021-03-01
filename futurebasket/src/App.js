import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { getLocaleData } from "./i18n/getLocaleData";

function App() {
  const locale = useSelector((state) => state.localeReducer);
  const localeData = getLocaleData(locale);
  console.log({localeData, locale});

  return (
    <IntlProvider locale = {localeData.locale} messages = {localeData.message} defaultLocale="en" >
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </IntlProvider>
  );
}

export default App;
