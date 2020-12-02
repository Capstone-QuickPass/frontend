import styled from 'styled-components';

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 20rem;
  background-color: #a0a0a0;
  box-shadow: 2px 2px gainsboro;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
`;

export const UserText = styled.h2`
  margin: 5px;
  font-size: 20px;
  color: white;
`;

export const SubContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PercentageContainer = styled.div`
  font-size: 20px;
  margin: 5px;
  color: white;
`;

export const Legend = styled.div`
  color: ${(props) => props.theme.main};
`;

export const GraphContainer = styled.div`
  position: relative;
  right: 80px;
  bottom: 70px;
`;
