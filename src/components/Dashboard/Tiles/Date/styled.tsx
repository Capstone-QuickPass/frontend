import styled from 'styled-components';
import { FONTS } from '../../../../globalStyles';

import { Card } from '@uifabric/react-cards';

export const TileContainer = styled(Card)`
  min-height: 130px;
  width: 10rem;
  background-color: #296157;
  padding: 15px;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const DateText = styled.div`
  color: white;
  font-size: 20px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 10px;
`;

export const TimeText = styled.div`
  color: white;
  font-size: 20px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 20px 10px;
`;
