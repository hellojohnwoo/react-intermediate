import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';


const App = () => {
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
          <Link to="/profile/anna">anna profile</Link>
        </li>
        <li>
          <Link to="/profile/bob">bob profile</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
      {/* <Route path="/about" component={About} />
        <Route path="/info" component={About} /> */}
    </div>
  );
};

export default App;
