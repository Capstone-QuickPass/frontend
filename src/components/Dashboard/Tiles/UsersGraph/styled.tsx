import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { FONTS } from '../../../../globalStyles';

export const TileContainer = styled(Paper)`
  height: 100%;
  padding: 4%;
  text-align: left;
`;

export const GraphTitle = styled.p`
  font-size: 25px;
  color: black;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  font-weight: 450;
  margin-top: 0;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
