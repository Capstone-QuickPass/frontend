import styled from 'styled-components';
import { FONTS } from '../../../../globalStyles';

import { Card } from '@uifabric/react-cards';

export const TileContainer = styled(Card)`
  min-height: 130px;
  width: 10rem;
  background-color: #c73749;
  padding: 15px;
  text-align: left;
`;

export const CountTitle = styled.p`
  font-size: 25px;
  color: white;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 10px;
`;

export const NumberDisplay = styled.div`
  font-size: 35px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 20px;
  color: white;
`;
