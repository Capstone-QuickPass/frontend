import styled from 'styled-components';
import { Card } from '@uifabric/react-cards';
import { FONTS } from '../../../../globalStyles';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 84vh;
  min-width: 41rem;
  background-color: ghostwhite;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 4.5rem;
  width: auto;
  border-bottom: 1px solid gray;
`;

export const GridContainer = styled.div`
  overflow-y: scroll;
`;

export const Separator = styled.hr`
  width: 100%;
  margin: 0px !important;
`;

export const UserTitle = styled.p`
  text-align: start;
  font-size: 25px;
  font-weight: 450;
  color: black;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin: 5px;
`;

export const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: space-around;
  list-style: none;
  padding-inline-start: 0;
`;

export const HeaderList = styled.li`
  font-family: ${FONTS.SEGOE_UI_REGULAR};
`;
