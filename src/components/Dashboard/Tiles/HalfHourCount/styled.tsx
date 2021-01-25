import styled from 'styled-components';

import { Card } from '@uifabric/react-cards';

export const TileContainer = styled(Card)`
  min-height: 130px;
  width: 10rem;
  background-color: #6948eb;
  padding: 15px;
  text-align: left;
`;

export const RecentCountTitle = styled.p`
  font-size: 25px;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`;

export const TimeRefresh = styled.p`
  font-size: 15px;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`;

export const CountIncrease = styled.p`
  font-size: 40px;
  margin: 20px;
  color: whitesmoke;
`;
