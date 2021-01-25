import React, { ReactElement, useEffect, useState } from 'react';

import store, { RootState } from '../../../../store';

import useInterval from '@use-it/interval';
import { PieChart, Pie } from 'recharts';

import {
  TileContainer,
  UserText,
  GraphContainer,
  SubContainer,
  Legend,
  LegendContainer,
  PercentageContainer,
} from './styled';
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

const MaskPercTile: React.FC<MaskPercTileProps> = (
  props: MaskPercTileProps,
): ReactElement => {
  const [maskcount, setCount] = useState<number>(0);

  var data = [
    { name: 'Masks', value: 0, fill: '#33aa33' },
    { name: 'Non-Mask', value: 0, fill: '#dd4343' },
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

  useEffect(() => {
    data = [
      { name: 'Masks', value: maskcount, fill: '#33aa33' },
      { name: 'Non-Mask', value: maskcount - props.size, fill: '#dd4343' },
    ];
  }, [maskcount]);

  return (
    <TileContainer>
      <UserText>Percentage of People Wearing Masks</UserText>
      <GraphContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={data}
            cx={200}
            cy={150}
            outerRadius={80}
            label
          />
        </PieChart>
      </GraphContainer>
      <SubContainer>
        <LegendContainer>
          <Legend theme={theme}>Mask On</Legend>
          <Legend theme={{ main: '#dd4343' }}>Mask Off</Legend>
        </LegendContainer>
        <PercentageContainer>
          {100 -
            Math.round(
              (data[1].value / (data[0].value + data[1].value)) * 100,
            ) +
            '% of masks on'}
        </PercentageContainer>
      </SubContainer>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(MaskPercTile);
