import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Livestream, Settings, Users } from '../views';
import { SignIn, SignUp } from '../components/Authentication';
import Welcome from '../components/Welcome';

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/livestream" component={Livestream} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/users" component={Users} />
    </Switch>
  </main>
);

export default Router;
