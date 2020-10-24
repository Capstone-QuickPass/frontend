import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Help, ExitToApp } from '@material-ui/icons';

const Menu = styled.div`
  background: #2f54eb;
  display: flex;
  align-items: center;
  color: whitesmoke;
  height: 87px;
`;

const IconButtons = styled.div`
  display: inherit;
  align-items: inherit;
  position: absolute;
  right: 0;
  margin-right: 2rem;
`;

const Header = () => {
  return (
    <Menu>
      <IconButtons>
        <IconButton color="inherit">
          <Help fontSize="large" />
        </IconButton>
        <IconButton color="inherit">
          <ExitToApp fontSize="large" />
        </IconButton>
      </IconButtons>
    </Menu>
  );
};

export default Header;
