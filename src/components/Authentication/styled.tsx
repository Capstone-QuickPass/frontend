import { Grid, Select, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;
  display: block;
  margin: 0 auto;
`;

export const SignInField = styled(TextField)`
  width: 100%;
  margin: 1% 0;
`;

export const SignInSubmit = styled(Grid)`
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SignUpField = styled(TextField)`
  width: 100%;
  margin: 1% 0;
`;

export const SignUpSelect = styled(Select)`
  width: 100%;
  margin: 2% 0;
`;

export const SubmitButtonGrid = styled(Grid)`
  padding-top: 2%;
`;
