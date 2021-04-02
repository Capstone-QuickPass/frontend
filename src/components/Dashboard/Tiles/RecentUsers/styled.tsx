import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { FONTS } from '../../../../globalStyles';

export const Container = styled(Paper)`
  height: 87vh;
  width: 100%;
  padding: 15px;
  font-family: ${FONTS.SEGOE_UI_REGULAR};
`;

export const TableContainer = styled.div`
  height: 80vh;
`;
