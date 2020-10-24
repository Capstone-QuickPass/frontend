import React from 'react';
import styled from 'styled-components';
import { RecentUsers, TotalUsers, UsersGraph } from '../components';

const Display = styled.div`
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  max-height: 90vh;
  gap: 10px;
`;

const TopHalf = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const Dashboard = () => {
  return (
    <Display>
      <TopHalf>
        <TotalUsers />
        <RecentUsers />
      </TopHalf>
      <UsersGraph />
    </Display>
  );
};

export { Dashboard };
