import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';

import { CountTitle, NumberDisplay, TileContainer } from './styled';

interface TotalUsersProps {
  count: number;
}

const mapStateToProps = (state: RootState) => {
  return {
    count: state.person.size,
  };
};

const TotalUsers: React.FC<TotalUsersProps> = (
  props: TotalUsersProps,
): ReactElement => {
  return (
    <TileContainer>
      <CountTitle>Total Users</CountTitle>
      <NumberDisplay>{props.count}</NumberDisplay>
    </TileContainer>
  );
};

export default connect(mapStateToProps)(TotalUsers);
