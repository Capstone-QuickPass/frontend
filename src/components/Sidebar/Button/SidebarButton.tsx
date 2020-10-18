import React from 'react';
import { Button } from '@material-ui/core';
import './SidebarButton.scss'

const SidebarButton = (props: {name: string, icon: any}) => {
   return(
   <Button classes={{label: 'customButton'}} startIcon={props.icon}>{props.name}</Button>
   );
}

export default SidebarButton;