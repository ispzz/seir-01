import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

/* HashRouter makes it easier to deploy your site. The BrowserRouter requires more work. */

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

// NB: Not a function, it's a variable with some JSX: Routes
const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ Search } />
      <Route path="/details/:username" component={ Profile } />
    </div>
  </Router>
);

ReactDOM.render(Routes, document.body);
