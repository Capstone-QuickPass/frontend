import React, { ReactElement, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import { person } from '../../../../store/personList/types';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import _ from 'lodash';
import useInterval from '@use-it/interval';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';

import {
  TileContainer,
  GraphTitle,
  Loader,
  BusiestText,
  HorizontalDivider,
} from './styled';

import { STARTING_DATA } from './StartingData';
import DataPoint from './DataPoint';
import { FONTS } from '../../../../globalStyles';

interface UsersGraphProps {
  list: person[];
}

const mapStateToProps = (state: RootState) => {
  return {
    list: state.person.list,
  };
};

const UsersGraph = (props: UsersGraphProps) => {
  let content, maxUser, maxHour;
  const [graphData, setGraphData] = useState<DataPoint[]>();

  const updateData = () => {
    const newData = getGraphData(props.list);
    setGraphData(newData);
  };

  useInterval(() => {
    updateData();
  }, 2100);

  if (!graphData) {
    content = (
      <Loader>
        <CircularProgress />
      </Loader>
    );
  } else {
    maxUser = Math.max(...graphData.map((x) => x.Users), 0);
    maxHour = Math.max(...graphData.map((x) => parseInt(x.hour)), 0);

    content = (
      <LineChart
        data={graphData}
        margin={{
          top: 5,
          right: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" tick={{ fontFamily: FONTS.SEGOE_UI_REGULAR }} />
        <YAxis tick={{ fontFamily: FONTS.SEGOE_UI_REGULAR }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Users"
          stroke="#9254de"
          activeDot={{ r: 8 }}
          strokeWidth={3}
          animationEasing={'ease-in-out'}
        />
      </LineChart>
    );
  }

  return (
    <TileContainer>
      <GraphTitle>Numbers of Users in the Past 24h</GraphTitle>
      <ResponsiveContainer width="95%" height={300}>
        {content}
      </ResponsiveContainer>
      <HorizontalDivider />
      <BusiestText>
        <strong>Busiest Hour</strong> {maxHour}:00h | <strong>Average:</strong>{' '}
        {maxUser} user(s)
      </BusiestText>
    </TileContainer>
  );
};

const getGraphData = (list: person[]) => {
  const initialData = STARTING_DATA;
  const listOfUsers = list;
  const entryHours = _.chain(listOfUsers)
    .sortBy('time')
    .map((user) => {
      return moment(user.time, 'HH:mm:ss').hour();
    })
    .value();

  let partition = _.countBy(entryHours, (hour) => {
    return hour;
  });

  let updatedData = initialData;

  _.forEach(partition, (value, key) => {
    const newDataPoint = {
      hour: key,
      Users: value,
    };

    const index = _.findIndex(initialData, { hour: key });
    updatedData.splice(index, 1, newDataPoint);
  });
  return updatedData;
};

export default connect(mapStateToProps)(UsersGraph);
