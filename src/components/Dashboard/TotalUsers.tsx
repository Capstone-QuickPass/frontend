import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInterval from '@use-it/interval';

const TileContainer = styled.div`
   height: 300px;
   width: 500px;
   background-color: ghostwhite;
   box-shadow: 2px 2px gainsboro;
   padding: 15px;
   border-radius: 10px;
   text-align: left;
`

const CountTitle = styled.p`
   font-size: 25px;
   color: black;
   font-family: 'Courier New', Courier, monospace;
   margin: 0;
`

const NumberDisplay = styled.p`
   font-size: 35px;
   margin: 20px;
`



const UserCount = () => {
   const [count, setCount] = useState<any[]>([]);

  useEffect( () => {
    fetchData();
  }, []);

  useInterval(() => {
   fetchData()
 }, 2000);

  const fetchData = async () => {
    await fetch(
      'http://localhost:8080/personlist'
    )
      .then(response => response.json())
      .then(receivedData => setCount(receivedData.personListSize));
  }

  return (
     <>
      <div>{count}</div>
     </>
  )

}



const TotalUsers = () => {

   //  const [count, setCount] = useState(69);
 
   //  useEffect(() => {
   //     const interval = setInterval(() => {
   //     setCount(count => count + 1);
   //   }, 1500);
   //     return () => {
   //     clearInterval(interval);
   //   };
   //  }, []);
       
    return(
       <TileContainer>
          <CountTitle>Total Users</CountTitle>
          <NumberDisplay>{UserCount()}</NumberDisplay>
       </TileContainer>
    )
 }


export default TotalUsers;