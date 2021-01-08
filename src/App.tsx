import React, { ReactElement, useEffect } from 'react';

import { Sidebar } from './components';
import { Header } from './components/Common/Header';

import { BottomLayout, Layout } from './styled';
import { initializeIcons } from '@fluentui/react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import { SignIn, SignUp } from './components/Authentication';
import { Dashboard, Livestream, Settings, Users } from './views';

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
