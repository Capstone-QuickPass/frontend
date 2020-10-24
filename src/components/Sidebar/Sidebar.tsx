import React from 'react';
import styled from 'styled-components';
import { SidebarButton } from './Button';
import { BarChart, Group, Videocam, Settings } from '@material-ui/icons';

const Menu = styled.div`
  background: #1d39c4;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  color: whitesmoke;
`;

const Sidebar = () => {
  return (
    <Menu>
      <SidebarButton name="Dashboard" icon={<BarChart />} />
      <SidebarButton name="Users" icon={<Group />} />
      <SidebarButton name="Stream" icon={<Videocam />} />
      <SidebarButton name="Settings" icon={<Settings />} />
    </Menu>
  );
};

export default Sidebar;
