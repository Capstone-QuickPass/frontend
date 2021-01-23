import React, { useEffect, useState } from 'react';
import useInterval from '@use-it/interval';
import store from '../../../../store';
import { CountTitle, NumberDisplay, TileContainer } from './styled';

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
