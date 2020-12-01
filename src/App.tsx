import React from 'react';
import './styles/App.scss';
import styled from 'styled-components';
import { Router, Sidebar, Header } from './components';

function App() {
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
}

export default App;

const Layout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BottomLayout = styled.div`
  display: flex;
  min-height: 92.5vh;
`;
