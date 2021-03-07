import React, { Props, useEffect, useState } from 'react';

import { RootState } from '../../../../store';

import useInterval from '@use-it/interval';
import { PieChart, Pie, Legend, Label, LabelList } from 'recharts';

import { TileContainer, UserText } from './styled';
import { connect } from 'react-redux';
import { person } from '../../../../store/personList/types';

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
      fill: '#33aa33',
    },
    {
      name: 'Non-Mask',
      value: (((props.size - maskcount) / props.size) * 100) | 0,
      fill: '#dd4343',
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
    var count = 0;
    for (var i = 0; i < props.size; i++) {
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
          outerRadius={80}
          isAnimationActive={false}
        >
          <LabelList dataKey="value" />
        </Pie>
      </PieChart>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(MaskPercTile);
