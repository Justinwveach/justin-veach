import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Travel from './containers/Travel';
export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Travel" exact component={Travel} />
  </Switch>
);
