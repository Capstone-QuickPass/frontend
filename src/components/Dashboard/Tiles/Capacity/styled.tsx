import styled from 'styled-components';
import { FONTS, COLORS } from '../../../../globalStyles';
import { Paper } from '@material-ui/core';

export const TileContainer = styled(Paper)`
  min-height: 130px;
  width: 10rem;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
`;

export const Content = styled.div`
  display: inherit;
  flex-direction: inherit;
  align-items: inherit;
`;

export const Population = styled.p`
  font-size: 50px;
  margin: 0;
  color: ${COLORS.LIME};
`;

export const BreakLine = styled.hr`
  width: 50%;
`;
