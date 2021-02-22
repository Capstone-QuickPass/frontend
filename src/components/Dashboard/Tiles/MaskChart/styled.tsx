import styled from 'styled-components';

import { Card } from '@uifabric/react-cards';
import { FONTS } from '../../../../globalStyles';

export const TileContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 22.5rem;
  min-width: 20rem;
  background-color: #d8d8d8;
  padding: 15px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
`;

export const UserText = styled.h3`
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  color: black;
  margin: 0;
`;

export const SubContainer = styled.div`
  display: inherit;
  flex-direction: row;
  padding: 15px;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PercentageContainer = styled.h4`
  font-size: 20px;
  width: 100px;
  margin: 5px 0px 0 20px;
  color: black;
`;

export const Legend = styled.div`
  margin: 2px 0;
  padding: 0px 5px;
  color: ${(props) => props.theme.main};
  border-style: solid;
  border-color: ${(props) => props.theme.main};
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
`;
