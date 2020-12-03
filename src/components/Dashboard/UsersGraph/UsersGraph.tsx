import React, { useEffect, useState } from 'react';
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
import store from '../../../store';
import _ from 'lodash';
import useInterval from '@use-it/interval';
import moment from 'moment';
import { TileContainer, GraphTitle } from './style';

interface dataPoint {
  hour: string;
  Users: number;
}

const getGraphData = () => {
  const initialData = [
    {
      hour: '0',
      Users: 0,
    },
    {
      hour: '1',
      Users: 0,
    },
    {
      hour: '2',
      Users: 0,
    },
    {
      hour: '3',
      Users: 0,
    },
    {
      hour: '4',
      Users: 0,
    },
    {
      hour: '5',
      Users: 0,
    },
    {
      hour: '6',
      Users: 0,
    },
    {
      hour: '7',
      Users: 0,
    },
    {
      hour: '8',
      Users: 0,
    },
    {
      hour: '9',
      Users: 0,
    },
    {
      hour: '10',
      Users: 0,
    },
    {
      hour: '11',
      Users: 0,
    },
    {
      hour: '12',
      Users: 0,
    },
    {
      hour: '13',
      Users: 0,
    },
    {
      hour: '14',
      Users: 0,
    },
    {
      hour: '15',
      Users: 0,
    },
    {
      hour: '16',
      Users: 0,
    },
    {
      hour: '17',
      Users: 0,
    },
    {
      hour: '18',
      Users: 0,
    },
    {
      hour: '19',
      Users: 0,
    },
    {
      hour: '20',
      Users: 0,
    },
    {
      hour: '21',
      Users: 0,
    },
    {
      hour: '22',
      Users: 0,
    },
    {
      hour: '23',
      Users: 0,
    },
  ];
  const listOfUsers = store.getState().person.list;
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

const UsersGraph = () => {
  const [graphData, setGraphData] = useState<dataPoint[]>();

  const updateData = () => {
    const newData = getGraphData();
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
          <XAxis dataKey="hour" />
          <YAxis />
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

export default UsersGraph;
