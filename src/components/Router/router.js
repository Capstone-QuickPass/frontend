import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../views/Dashboard';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Dashboard }/>
    </Switch>
  </main>
);

export default Router;