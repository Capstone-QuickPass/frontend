import React, { useEffect, useState } from 'react';

import store from '../../../../store';

import useInterval from '@use-it/interval';

import {
  Container,
  GridContainer,
  HeaderList,
  HeaderUl,
  Separator,
  UserContainer,
  UserTitle,
} from './styled';

const HeaderItems = ['User', 'Mask Status', 'Precision Score', 'Time'];

const HeaderDisplay = () => {
  return (
    <div>
      <HeaderUl>
        {HeaderItems.map((item, index) => {
          return (
            <div key={index}>
              <HeaderList>{item}</HeaderList>
            </div>
          );
        })}
      </HeaderUl>
    </div>
  );
};

const UserCardDisplay = () => {
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setUser(store.getState().person.list);
    }, 100);
  }, []);

  useInterval(() => {
    setUser(store.getState().person.list);
  }, 2100);

  return (
    <div>
      {user.map((user, index) => {
        return (
          <UserContainer key={index}>
            <p>{user._id}</p>
            <p>{user.mask_status}</p>
            <p>{user.score}</p>
            <p>{user.time}</p>
          </UserContainer>
        );
      })}
    </div>
  );
};

const RecentUsers = () => {
  return (
    <Container>
      <UserTitle>Recent Users</UserTitle>
      <Separator />
      {HeaderDisplay()}
      <Separator />
      <GridContainer>{UserCardDisplay()}</GridContainer>
    </Container>
  );
};

export default RecentUsers;
