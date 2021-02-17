import styled from 'styled-components';

import { Card } from '@uifabric/react-cards';
import { FONTS } from '../../../../globalStyles';

export const TileContainer = styled(Card)`
  min-height: 25rem;
  min-width: 100%;
  background-color: ghostwhite;
  padding: 15px;
  text-align: left;
`;

export const GraphTitle = styled.p`
  font-size: 25px;
  color: black;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  font-weight: 450;
  margin-top: 0;
`;
