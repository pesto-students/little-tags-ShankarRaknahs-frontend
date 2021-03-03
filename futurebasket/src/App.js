import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { getLocaleData } from "./i18n/getLocaleData";
import { flatten } from "flat";
import Search from './pages/Search/Search';
import product from './pages/Product/product';

function App() {
  const locale = useSelector((state) => state.localeReducer);
  const localeData = getLocaleData(locale);
  return (
    <IntlProvider locale = {localeData.locale} messages = {flatten(localeData.message)} defaultLocale="en" >
    <Router>
      <Switch>
      <Route path='/search'>
          <Search />
        </Route>
        <Route path='/product/:id'>
          <product />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </IntlProvider>
  );
}

export default App;
