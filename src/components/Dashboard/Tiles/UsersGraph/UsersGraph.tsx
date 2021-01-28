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

import { TileContainer, GraphTitle } from './styled';

import { DUMMY_DATA } from './dummyData';
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

const UsersGraph: React.FC<UsersGraphProps> = (
  props: UsersGraphProps,
): ReactElement => {
  const [graphData, setGraphData] = useState<DataPoint[]>();

  const updateData = () => {
    const newData = getGraphData(props.list);
    setGraphData(newData);
  };

  useEffect(() => {
    updateData();
    setTimeout(() => {
      updateData();
    }, 500);
  }, []);

  useInterval(() => {
    updateData();
  }, 2100);

  return (
    <TileContainer>
      <GraphTitle>Numbers of Users in the Past 24h</GraphTitle>
      <ResponsiveContainer width="95%" height={300}>
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
            stroke="#cf1322"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </TileContainer>
  );
};

const getGraphData = (list: person[]) => {
  const initialData = DUMMY_DATA;
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
