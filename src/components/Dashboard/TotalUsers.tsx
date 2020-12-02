import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInterval from '@use-it/interval';
import store from '../../store';

const TileContainer = styled.div`
  height: 130px;
  width: 10rem;
  background-color: #c73749;
  box-shadow: 2px 2px gainsboro;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
`;

const CountTitle = styled.p`
  font-size: 25px;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`;

const NumberDisplay = styled.div`
  font-size: 35px;
  margin: 20px;
  color: #ffffff;
`;

const UserCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(store.getState().person.size);
    }, 100);
  }, []);

  useInterval(() => {
    setCount(store.getState().person.size);
  }, 2100);

  return <p>{count}</p>;
};

const TotalUsers = () => {
  return (
    <TileContainer>
      <CountTitle>Total Users</CountTitle>
      <NumberDisplay>{UserCount()}</NumberDisplay>
    </TileContainer>
  );
};

export default TotalUsers;
