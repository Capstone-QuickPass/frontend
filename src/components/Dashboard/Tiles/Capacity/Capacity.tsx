import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';

import { Column, MaxCapacity, NumberDisplay, TileContainer } from './styled';

interface CapacityProp {
  maxCapacity: number;
  currentPopulation: number;
}

const mapStateToProps = (state: RootState) => {
  return {
    maxCapacity: state.facility.capacity,
    currentPopulation: state.facility.currentPopulation,
  };
};

const Capacity = (props: CapacityProp) => {
  return (
    <TileContainer>
      <Column>
        <MaxCapacity>Max Capacity</MaxCapacity>
        <NumberDisplay>{props.maxCapacity}</NumberDisplay>
      </Column>
      <hr />
      <Column>
        <MaxCapacity>Current Population</MaxCapacity>
        <NumberDisplay>{props.currentPopulation}</NumberDisplay>
      </Column>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(Capacity);
