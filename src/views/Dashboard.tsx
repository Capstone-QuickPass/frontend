import React from 'react';
import styled from 'styled-components';
import { RecentUsers, TotalUsers, UsersGraph, NewUsersCount } from '../components';

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

const LeftTopTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Dashboard = () => {
  return (
    <Display>
      <TopHalf>
        <LeftTopTile>
          <TotalUsers />
          <NewUsersCount/>
        </LeftTopTile>
        <RecentUsers />
      </TopHalf>
      <UsersGraph />
    </Display>
  );
};

export { Dashboard };
