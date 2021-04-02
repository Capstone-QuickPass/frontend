import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import { person } from '../../../../store/personList/types';

import _ from 'lodash';
import useInterval from '@use-it/interval';
import moment from 'moment';

import { TileContainer, Content, Users, BreakLine } from './styled';

interface HalfHourCountProps {
  personList: person[];
}

const mapStateToProps = (state: RootState) => {
  return {
    personList: state.person.list,
  };
};

const HalfHourCount = (props: HalfHourCountProps) => {
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
      <Content>
        <p>Users Entered</p>
        <Users>{past30Count}</Users>
      </Content>
      <BreakLine />
      <Content>
        <p>
          Past <b>30 minutes</b>
        </p>
      </Content>
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
