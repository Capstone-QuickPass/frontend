import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInterval from '@use-it/interval';
import store from '../../store';

const Container = styled.div`
  background-color: ghostwhite;
  box-shadow: 2px 2px gainsboro;
  border-radius: 10px;
  padding: 15px;
  height: 85vh;
  width: 40rem;
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-columns: 80px 80px 80px;
  column-gap: 175px;
  width: auto;
  border-bottom: 1px solid gray;
`;

const GridContainer = styled.div`
  overflow-y: scroll;
`;

const Separator = styled.hr`
  width: 100%;
  margin: 0px;
`;

const UserTitle = styled.p`
  text-align: start;
  font-size: 25px;
  color: black;
  font-family: 'Courier New', Courier, monospace;
  margin: 5px;
`;

const HeaderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-columns: 80px 80px 80px;
  list-style: none;
  padding-inline-start: 0;
  column-gap: 175px;
`;

const HeaderList = styled.li``;

const HeaderItems = ['User', 'Score', 'Time'];

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
