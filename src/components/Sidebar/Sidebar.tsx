import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
   return(
      <Menu>SAMPLE</Menu>
   );
}

const Menu = styled.div`
   background: #5C6AC4;
   min-height: 100vh;
   display: flex;
   align-items: center;
   width: 12.5rem;
   color: whitesmoke;
   justify-content: center;
`

export default Sidebar;