import React from 'react';
import {
  TileContainer,
  UserText,
  GraphContainer,
  SubContainer,
  Legend,
  LegendContainer,
  PercentageContainer,
} from './MaskElements';
import { PieChart, Pie } from 'recharts';

const data = [
  { name: 'Group A', value: 318, fill: '#7CFC00' },
  { name: 'Group B', value: 34, fill: '#990000' },
];

const theme = {
  main: '#7CFC00',
};

const MaskPercTile = () => {
  return (
    <TileContainer>
      <UserText>Percentage of People Wearing Masks</UserText>
      <SubContainer>
        <LegendContainer>
          <Legend theme={theme}>Mask On &nbsp;</Legend>
          <Legend theme={{ main: '#990000' }} style={{ margin: '2px 0px' }}>
            {' '}
            Mask Off
          </Legend>
        </LegendContainer>
        <PercentageContainer>
          {100 -
            Math.round((data[1].value / data[0].value) * 100) +
            '% of masks on'}
        </PercentageContainer>
      </SubContainer>
      <GraphContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={data}
            cx={200}
            cy={160}
            outerRadius={80}
            label
          />
        </PieChart>
      </GraphContainer>
    </TileContainer>
  );
};

export default MaskPercTile;
