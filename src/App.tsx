import React from 'react';
import './styles/App.scss';
import styled from 'styled-components';
import { Router, Sidebar, Header } from './components';

function App() {
  return (
    <Layout>
      <Sidebar/>
      <RightSideLayout>
        <Header/>
        <Router/>
      </RightSideLayout>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: inline-flex;
`

const RightSideLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`