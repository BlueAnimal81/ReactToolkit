import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Home from 'Home';

export default (
  <Router history={hashHistory}>
    <Route path='/'>      
      <IndexRoute path='home' component={Home} />
    </Route>
  </Router>
);