import React, { useState , useEffect} from 'react';
import styled from 'styled-components';

const Display = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const TileContainer = styled.div`
   height: 100px;
   width: 200px;
   background-color: ghostwhite;
   box-shadow: 2px 2px gainsboro;
   padding: 20px;
   border-radius: 5px;
   text-align: right;
`

const CountTitle = styled.p`
   font-size: 25px;
   color: dimgray;
   font-family: 'Courier New', Courier, monospace;
   margin: 0;
`

const NumberDisplay = styled.p`
   font-size: 35px;
   margin: 20px;
`

const TileCounter = () => {

   const [count, setCount] = useState(69);

   useEffect(() => {
      const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 1500);
      return () => {
      clearInterval(interval);
    };
   }, []);
      
   return(
      <TileContainer>
         <CountTitle>Users</CountTitle>
         <NumberDisplay>{count}</NumberDisplay>
      </TileContainer>
   )
}

const Dashboard = () => {
   return(
      <Display>
         {TileCounter()}
      </Display>
   );
}


export { Dashboard };