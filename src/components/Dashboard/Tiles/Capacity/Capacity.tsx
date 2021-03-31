import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';

import { TileContainer, Content, Population, BreakLine } from './styled';

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
      <Content>
        <p>Current Population</p>
        <Population>{props.currentPopulation}</Population>
      </Content>
      <BreakLine />
      <Content>
        <p>
          Max Capacity <b>{props.maxCapacity}</b>
        </p>
      </Content>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(Capacity);
