import styled from 'styled-components';

import { Card } from '@uifabric/react-cards';
import { FONTS } from '../../../../globalStyles';

export const TileContainer = styled(Card)`
  min-height: 130px;
  width: 10rem;
  background-color: #6948eb;
  padding: 15px;
  text-align: left;
`;

export const RecentCountTitle = styled.p`
  font-size: 25px;
  color: white;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 0;
`;

export const TimeRefresh = styled.p`
  font-size: 15px;
  color: white;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 0px;
`;

export const CountIncrease = styled.p`
  font-size: 35px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 20px;
  color: white;
`;
