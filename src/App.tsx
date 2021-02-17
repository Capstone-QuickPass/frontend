import React, { ReactElement } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Common/Header';
import Welcome from './components/Welcome';
import { SignIn, SignUp } from './components/Authentication';
import Dashboard from './components/Dashboard';
import Livestream from './components/Livestream';
import Settings from './components/Settings';
import Users from './components/Users';

import { initializeIcons } from '@fluentui/react';

import { BottomLayout, Layout } from './styled';

initializeIcons();

const App: React.FC<{ location: any }> = (props: {
  location: any;
}): ReactElement => {
  return (
    <Layout>
      <Header />
      <BottomLayout>
        {isSidebarVisible(props.location.pathname) && <Sidebar />}
        <main style={{ flexGrow: 1 }}>
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
      </BottomLayout>
    </Layout>
  );
};

const isSidebarVisible = (path: string): boolean => {
  return path !== '/' && path !== '/login' && path !== '/signup';
};

export default withRouter(App);
