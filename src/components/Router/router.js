import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../views/Dashboard';
import {SignIn, SignUp} from '../Authentication';
import Welcome from '../Welcome';

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </main>
);

export default Router;
