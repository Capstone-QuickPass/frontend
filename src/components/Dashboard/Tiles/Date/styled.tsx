import styled from 'styled-components';
import { FONTS, COLORS } from '../../../../globalStyles';
import { Paper } from '@material-ui/core';

export const TileContainer = styled(Paper)`
  height: 100%;
  min-width: 90%;
  text-align: left;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
`;

export const DateText = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${COLORS.GREY3};
`;

export const TimeText = styled.p`
  margin: 0;
  font-size: 50px;
`;
