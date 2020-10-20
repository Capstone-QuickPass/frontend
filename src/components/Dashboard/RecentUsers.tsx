import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: ghostwhite;
  box-shadow: 2px 2px gainsboro;
  border-radius: 10px;
  padding: 15px;
  height: 300px;
  width: 650px;
  display: flex;
  flex-direction: column;
`

const UserContainer = styled.div`
  /* background-color: pink; */
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-columns: 90px 80px 80px;
  column-gap: 200px;
  width: 650px;
  border-bottom: 1px solid gray;
`

const Separator = styled.hr`
  width: 100%;
  margin: 0px;
`

const UserTitle = styled.p`
  text-align: start;
  font-size: 25px;
  color: black;
  font-family: 'Courier New', Courier, monospace;
  margin: 5px;
`

const HeaderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4,auto);
  list-style: none;
  padding-inline-start: 0;
  gap: 250px;
`

const HeaderList = styled.li`
`

const HeaderItems = [
  "User",
  "Score",
  "Time"
]

const TempUsers = [
    {
        Name: "Daniel \n Shwan",
        Score: 69,
        Time: "6:09pm",
    },
    {
        Name: "Sanat Gupta",
        Score: 96,
        Time: "9:06pm",
    },
    {
        Name: "Bhala Chen",
        Score: 54,
        Time: "7:02pm",
    }
]

const HeaderDisplay = () => {
  return(
    <>
      <HeaderUl>
        {HeaderItems.map((item,index) => {
          return(
            <>
              <HeaderList key={index}>
                {item}
              </HeaderList>
              </>
          )
        })}
      </HeaderUl>
    </>
  )
}


const UserCardDisplay = () => {

  const [user, setUser] = useState<any[]>([]);

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(
      'http://localhost:8080/personlist'
    )
      .then(response => response.json())
      .then(receivedData => setUser(receivedData.personList));
  }

  return(
    <>
      {console.log(user)}
      {user.map((user,index) => {
        return(
        <UserContainer key={index}>
          <p>{user._id}</p>
          <p>{user.score}</p>
          <p>{user.time}</p>
        </UserContainer>
        )
      })}
    </>
  )
}

const RecentUsers = () => {
    return(
        <Container>
            <UserTitle>Recent Users</UserTitle>
                <Separator/>
                {HeaderDisplay()}
                <Separator/>
            {UserCardDisplay()}
        </Container>
    )
}

export default RecentUsers