import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Search />
        </Route>
        <Route exact path='/results'>
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
