import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../views/Dashboard';
import {SignIn, SignUp} from '../Authentication';

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </main>
);

export default Router;
