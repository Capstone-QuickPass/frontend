import React, { useEffect, useState } from 'react';
import store from '../../../store';
import _ from 'lodash';
import useInterval from '@use-it/interval';
import moment from 'moment';
import {
  TileContainer,
  RecentCountTitle,
  TimeRefresh,
  CountIncrease,
} from './style';

const countPast30 = () => {
  let listOfUsers = store.getState().person.list;
  let filteredUsers = _.filter(listOfUsers, (user) => {
    return (
      user.time >= moment().subtract(30, 'minutes').format('HH:mm:ss') &&
      user.time <= moment().format('HH:mm:ss')
    );
  });
  return filteredUsers.length;
};

const HalfHourCount = () => {
  const [past30Count, setPast30Count] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      let count = countPast30();
      setPast30Count(count);
    }, 100);
  }, []);

  useInterval(() => {
    let count = countPast30();
    setPast30Count(count);
  }, 60000);

  return (
    <TileContainer>
      <RecentCountTitle>Users Entered</RecentCountTitle>
      <TimeRefresh>past 30 mins</TimeRefresh>
      <CountIncrease>{past30Count}</CountIncrease>
    </TileContainer>
  );
};

export default HalfHourCount;
