import styled from 'styled-components';

export const Container = styled.div`
  background-color: ghostwhite;
  box-shadow: 2px 2px gainsboro;
  border-radius: 10px;
  padding: 15px;
  height: 84vh;
  width: 41rem;
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
  margin: 0px;
`;

export const UserTitle = styled.p`
  text-align: start;
  font-size: 25px;
  color: black;
  font-family: 'Courier New', Courier, monospace;
  margin: 5px;
`;

export const HeaderUl = styled.ul`
  display: grid;
  grid-template-columns: 20px 20px 20px 20px;
  list-style: none;
  padding-inline-start: 0;
  column-gap: 175px;
`;

export const HeaderList = styled.li``;
