import React, { ReactElement } from 'react';

import { Router, Sidebar } from './components';
import { Header } from './components/Common/Header';

import { BottomLayout, Layout } from './styled';
import { initializeIcons } from '@fluentui/react';

initializeIcons();

const App: React.FC = (): ReactElement => {
  return (
    <Layout>
      <Header />
      <BottomLayout>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Router />
        </div>
      </BottomLayout>
    </Layout>
  );
};

export default App;
