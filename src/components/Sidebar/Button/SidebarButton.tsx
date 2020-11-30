import React from 'react';
import { Button } from '@material-ui/core';
import './SidebarButton.scss';
import { useHistory } from 'react-router-dom';

const SidebarButton = (props: { name: string; icon: any; url: string }) => {
  const history = useHistory();
  return (
    <Button
      classes={{ label: 'customButton' }}
      startIcon={props.icon}
      onClick={() => {
        history.push(`${props.url}`);
      }}
    >
      {props.name}
    </Button>
  );
};

export default SidebarButton;
