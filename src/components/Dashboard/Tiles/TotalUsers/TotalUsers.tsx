import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';

import {
  CountTitle,
  MaxCapacity,
  NumberDisplay,
  TileContainer,
} from './styled';

interface TotalUsersProps {
  maxCapacity: number;
  currentCapacity: number;
}

const mapStateToProps = (state: RootState) => {
  return {
    maxCapacity: state.facility.maxCap,
    currentCapacity: state.facility.currCap,
  };
};

const TotalUsers: React.FC<TotalUsersProps> = (
  props: TotalUsersProps,
): ReactElement => {
  return (
    <TileContainer>
      <MaxCapacity>Max Capacity</MaxCapacity>
      <NumberDisplay>{props.maxCapacity}</NumberDisplay>
      <CountTitle>Total Users</CountTitle>
      <NumberDisplay>{props.currentCapacity}</NumberDisplay>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(TotalUsers);
