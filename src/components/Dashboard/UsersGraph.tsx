import React from 'react';
import styled from 'styled-components';
import {
   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
 } from 'recharts';

const TileContainer = styled.div`
   height: 375px;
   width: 1040px;
   background-color: ghostwhite;
   box-shadow: 2px 2px gainsboro;
   padding: 15px;
   border-radius: 10px;
   text-align: left;
`

const GraphTitle = styled.p`
   font-size: 25px;
   color: black;
   font-family: 'Courier New', Courier, monospace;
   margin-top: 0;
`

const data = [
   {
     name: 'Sept. 25, 2020', Users: 105, "At Risk Cases": 2
   },
   {
     name: 'Sept. 26, 2020', Users: 35, "At Risk Cases": 0
   },
   {
     name: 'Sept. 27, 2020', Users: 57, "At Risk Cases": 1
   },
   {
     name: 'Sept. 28, 2020', Users: 69, "At Risk Cases": 10
   },
   {
     name: 'Sept. 29, 2020', Users: 12, "At Risk Cases": 0
   },
   {
     name: 'Sept. 30, 2020', Users: 48, "At Risk Cases": 0
   },
   {
     name: 'Oct. 1, 2020', Users: 86, "At Risk Cases": 0
   },
   {
     name: 'Oct. 2, 2020', Users: 68, "At Risk Cases": 0
   },
   {
     name: 'Oct. 3, 2020', Users: 145, "At Risk Cases": 10
   },
   {
     name: 'Oct. 4, 2020', Users: 34, "At Risk Cases": 2
   },
   {
     name: 'Oct. 5, 2020', Users: 105, "At Risk Cases": 3
   },
   {
     name: 'Oct. 6, 2020', Users: 280, "At Risk Cases": 50
   },
   {
     name: 'Oct. 7, 2020', Users: 56, "At Risk Cases": 0
   },
   {
     name: 'Oct. 8, 2020', Users: 100, "At Risk Cases": 1
   },
 ];

const UsersGraph = () => {
   return(
      <TileContainer>
         <GraphTitle>Numbers of Users in the Past 14 Days</GraphTitle>
         <LineChart
            width={1000}
            height={325}
            data={data}
            margin={{
               top: 5, right: 30, left: 20, bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Users" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="At Risk Cases" stroke="#cf1322" activeDot={{ r: 8 }} />
         </LineChart>
      </TileContainer>
   );
}

export default UsersGraph;