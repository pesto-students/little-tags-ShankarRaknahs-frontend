import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import './App.css';


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/">
          <Home />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
