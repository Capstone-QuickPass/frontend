import styled from 'styled-components';
import { FONTS } from '../../../../globalStyles';

import { Paper } from '@material-ui/core';

export const TileContainer = styled(Paper)`
  min-height: 130px;
  width: 10rem;
  background-color: #296157;
  padding: 15px;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 20px;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
`;

export const DateText = styled.div`
  margin: 10px;
`;

export const TimeText = styled.div`
  margin: 20px 10px;
`;
