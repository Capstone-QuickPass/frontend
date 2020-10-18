import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import RecentUsers from '../components/Dashboard/RecentUsers';
import TotalUsers from '../components/Dashboard/TotalUsers';

const Display = styled.div`
   padding: 10px;
   display: flex;
   justify-content: start;
   align-items: flex-start;
   gap: 10px;
   height: 90vh;
`

const Dashboard = () => {
   return(
      <Display>
         {TotalUsers()}
         {RecentUsers()}
      </Display>
   );
}


export { Dashboard };