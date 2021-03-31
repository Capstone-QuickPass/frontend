import useInterval from '@use-it/interval';
import React, { useState } from 'react';
import moment from 'moment';

import { TileContainer, DateText, TimeText } from './styled';

const DateTile = () => {
  const [currTime, setTime] = useState<string>();

  useInterval(() => {
    setTime(moment().format('LTS'));
  }, 1000);

  return (
    <TileContainer>
      <DateText>{moment().format('dddd, MMMM Do YYYY')}</DateText>
      <TimeText>{currTime}</TimeText>
    </TileContainer>
  );
};

export default DateTile;
