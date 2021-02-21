import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';

import {
  CountTitle,
  MaxCapacity,
  NumberDisplay,
  TileContainer,
} from './styled';

interface CurrentUserCapacityProp {
  maxCapacity: undefined;
  currentPopulation: undefined;
}

const mapStateToProps = (state: RootState) => {
  return {
    maxCapacity: state.facility.capacity,
    currentPopulation: state.facility.currentPopulation,
  };
};

const TotalUsers: React.FC<CurrentUserCapacityProp> = (
  props: CurrentUserCapacityProp,
): ReactElement => {
  return (
    <TileContainer>
      <MaxCapacity>Max Capacity</MaxCapacity>
      <NumberDisplay>{props.maxCapacity}</NumberDisplay>
      <CountTitle>Total Users</CountTitle>
      <NumberDisplay>{props.currentPopulation}</NumberDisplay>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(TotalUsers);
