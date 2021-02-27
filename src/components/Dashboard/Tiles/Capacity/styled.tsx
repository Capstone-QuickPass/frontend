import styled from 'styled-components';
import { FONTS } from '../../../../globalStyles';
import { Paper } from '@material-ui/core';

export const TileContainer = styled(Paper)`
  height: 11.75rem;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  background-color: #c73749;
`;

export const MaxCapacity = styled.h4`
  font-size: 25px;
`;

export const Column = styled.div`
  display: inherit;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

export const NumberDisplay = styled.div`
  font-size: 30px;
`;
