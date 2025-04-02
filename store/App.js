import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Storage from './components/Storage';
import Auth from './components/Auth';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
          <li>
            <Link to="/storage">Storage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/storage" component={Storage} />
        <Route path="/" exact component={() => <div>Home</div>} />
      </Switch>
    </div>
  );
};

export default App;
