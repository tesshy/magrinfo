import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Storage from './components/Storage';
import Auth from './components/Auth';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/storage" component={Storage} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
