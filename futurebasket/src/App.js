import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { IntlProvider } from 'react-intl';

function App() {
    // const [locale, setLocale] = useState("en")
  
  return (
    <IntlProvider>
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
