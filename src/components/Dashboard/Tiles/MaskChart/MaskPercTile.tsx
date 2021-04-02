import React, { useEffect, useState } from 'react';

import { RootState } from '../../../../store';

import useInterval from '@use-it/interval';
import { PieChart, Pie, Legend, Label, LabelList } from 'recharts';

import { TileContainer, UserText } from './styled';
import { connect } from 'react-redux';
import { person } from '../../../../store/personList/types';
import CountUp from 'react-countup';

const theme = {
  main: '#004d00',
};

interface MaskPercTileProps {
  size: number;
  list: person[];
}

const mapStateToProps = (state: RootState) => {
  return {
    size: state.person.size,
    list: state.person.list,
  };
};

const MaskPercTile = (props: MaskPercTileProps) => {
  const [maskcount, setCount] = useState<number>(0);

  let data = [
    {
      name: 'Masks',
      value: ((maskcount / props.size) * 100) | 0,
      fill: '#73d13d',
    },
    {
      name: 'Non-Mask',
      value: (((props.size - maskcount) / props.size) * 100) | 0,
      fill: '#ff7875',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      var count = 0;
      for (var i = 0; i < props.size; i++) {
        if (props.list[i].mask_status === 'Mask') {
          count += 1;
        }
      }
      setCount(count);
    }, 100);
  }, []);

  useInterval(() => {
    let count = 0;
    for (let i = 0; i < props.size; i++) {
      if (props.list[i].mask_status === 'Mask') {
        count += 1;
      }
    }
    setCount(count);
  }, 2100);

  return (
    <TileContainer>
      <UserText>Percentage of People Wearing Masks</UserText>
      <PieChart width={250} height={250}>
        <Legend verticalAlign="bottom" />
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={data}
          innerRadius={50}
          outerRadius={80}
        >
          <Label position="center">{`${data[0].value}% Masks`}</Label>
        </Pie>
      </PieChart>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(MaskPercTile);
