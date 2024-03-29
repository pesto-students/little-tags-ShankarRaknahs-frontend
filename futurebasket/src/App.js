import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { getLocaleData } from './i18n/getLocaleData';
import { flatten } from 'flat';
import { Search } from './pages/Search/Search';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';
import CartView from './pages/Cart/CartView';
import WishlistView from './pages/Wishlist/WishlistView';

function App() {
  const locale = useSelector((state) => state.localeReducer);
  const localeData = getLocaleData(locale);
  
  return (
    <IntlProvider
      locale={localeData.locale}
      messages={flatten(localeData.message)}
      defaultLocale='en'
    >
      <Router>
        <Switch>
          <Route
            path='/search'
            render={(props) => <Search key={props.location.key} />}
          />
          <Route path='/product/:id'>
            <Product />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/cart'>
            <CartView />
          </Route>
          <Route path='/wishlist'>
            <WishlistView />
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
