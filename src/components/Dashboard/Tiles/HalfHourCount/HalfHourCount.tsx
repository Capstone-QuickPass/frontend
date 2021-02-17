import React, { ReactElement, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import { person } from '../../../../store/personList/types';

import _ from 'lodash';
import useInterval from '@use-it/interval';
import moment from 'moment';

import {
  TileContainer,
  RecentCountTitle,
  TimeRefresh,
  CountIncrease,
} from './styled';

interface HalfHourCountProps {
  personList: person[];
}

const mapStateToProps = (state: RootState) => {
  return {
    personList: state.person.list,
  };
};

const HalfHourCount: React.FC<HalfHourCountProps> = (
  props: HalfHourCountProps,
): ReactElement => {
  const [past30Count, setPast30Count] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      let count = countPast30(props.personList);
      setPast30Count(count);
    }, 100);
  }, []);

  useInterval(() => {
    let count = countPast30(props.personList);
    setPast30Count(count);
  }, 2100);

  return (
    <TileContainer>
      <RecentCountTitle>Users Entered</RecentCountTitle>
      <TimeRefresh>past 30 mins</TimeRefresh>
      <CountIncrease>{past30Count}</CountIncrease>
    </TileContainer>
  );
};

const countPast30 = (listOfUsers: person[]) => {
  let filteredUsers = _.filter(listOfUsers, (user) => {
    return (
      user.time >= moment().subtract(30, 'minutes').format('HH:mm:ss') &&
      user.time <= moment().format('HH:mm:ss')
    );
  });
  return filteredUsers.length;
};

export default connect(mapStateToProps)(HalfHourCount);
