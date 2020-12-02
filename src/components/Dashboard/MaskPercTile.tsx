import React, { useEffect, useState } from 'react';
import {
  TileContainer,
  UserText,
  GraphContainer,
  SubContainer,
  Legend,
  LegendContainer,
  PercentageContainer,
} from './MaskElements';
import useInterval from '@use-it/interval';
import store from '../../store';
import { PieChart, Pie } from 'recharts';

const theme = {
  main: '#004d00',
};

const MaskCount = () => {
  const [maskcount, setCount] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      var count = 0;
      for (var i = 0; i < store.getState().person.size; i++) {
        if (store.getState().person.list[i].mask_status === 'Mask') {
          count += 1;
        }
      }
      setCount(count);
    }, 100);
  }, []);

  useInterval(() => {
    var count = 0;
    for (var i = 0; i < store.getState().person.size; i++) {
      if (store.getState().person.list[i].mask_status === 'Mask') {
        count += 1;
      }
    }
    setCount(count);
  }, 2100);

  return [maskcount, store.getState().person.size - maskcount];
};

const MaskPercTile = () => {
  var data = [
    { name: 'Masks', value: MaskCount()[0], fill: '#004d00' },
    { name: 'Non-Mask', value: MaskCount()[1], fill: '#990000' },
  ];

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
          <Legend theme={theme}>Mask On &nbsp;</Legend>
          <Legend theme={{ main: '#990000' }}> Mask Off</Legend>
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

export default MaskPercTile;
