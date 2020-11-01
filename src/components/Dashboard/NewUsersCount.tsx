import React from 'react'
import styled from 'styled-components'

const TileContainer = styled.div`
  height: 130px;
  width: 240px;
  background-color: #451FDE;
  box-shadow: 2px 2px gainsboro;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
`;

const RecentCountTitle = styled.p`
  font-size: 25px;
  color: #FFFFFF;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`;

const TimeRefresh = styled.p`
  font-size: 15px;
  color: #FFFFFF;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`;

const CountIncrease = styled.p`
  font-size: 40px;
  margin: 20px;
  color: #4C974B;
`;

const NewUsersCount = () => {
    return(
        <TileContainer>
            <RecentCountTitle>Users Entered</RecentCountTitle>
            <TimeRefresh>past 30 mins</TimeRefresh>
            <CountIncrease>+10</CountIncrease>
        </TileContainer>
    )
};

export default NewUsersCount