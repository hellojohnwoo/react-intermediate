import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App2 = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profiles">profile</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
      </ul>
      <hr />
        <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
        <Routh
          render={({ location }) => (
            <div>
              <h2>not exist page</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
        </Switch>
    </div>
  );
};

export default App2;