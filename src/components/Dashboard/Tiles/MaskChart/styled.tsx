import styled from 'styled-components';

import { Card } from '@uifabric/react-cards';
import { FONTS } from '../../../../globalStyles';

export const TileContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 20rem;
  background-color: #d8d8d8;
  padding: 15px;
  text-align: left;
  align-items: center;
`;

export const UserText = styled.h2`
  margin: 5px;
  font-size: 20px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  color: black;
`;

export const SubContainer = styled.div`
  margin: 90px 0;
  display: flex;
  flex-direction: row;
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
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
`;

export const Legend = styled.div`
  margin: 2px 0;
  padding: 0px 5px;
  color: ${(props) => props.theme.main};
  border-style: solid;
  border-color: ${(props) => props.theme.main};
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
`;

export const GraphContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  right: 160px;
  bottom: 70px;
`;
