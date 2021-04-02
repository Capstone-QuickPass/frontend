import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { FONTS, COLORS } from '../../../../globalStyles';

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

export const Users = styled.p`
  font-size: 50px;
  margin: 0;
  color: ${COLORS.CYAN};
`;

export const BreakLine = styled.hr`
  width: 50%;
`;
