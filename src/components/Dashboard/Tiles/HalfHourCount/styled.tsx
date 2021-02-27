import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { FONTS } from '../../../../globalStyles';

export const TileContainer = styled(Paper)`
  min-height: 130px;
  width: 10rem;
  padding: 15px;
  text-align: left;
`;

export const RecentCountTitle = styled.p`
  font-size: 25px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 0;
`;

export const TimeRefresh = styled.p`
  font-size: 15px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 0px;
`;

export const CountIncrease = styled.p`
  font-size: 35px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 20px;
`;
