import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { INavLink, INavLinkGroup, INavStyles } from '@fluentui/react';

import { COLORS, FONTS } from '../../globalStyles';
import {
  MainItems,
  NavMenu,
  OuterSideBarWrapper,
  ChatButton,
  ChatBotContainer,
} from './styled';

const navMenuLinksProps: Partial<INavStyles> = {
  link: {
    selectors: {
      '.ms-Nav-compositeLink:hover &': {
        backgroundColor: COLORS.BLUE2,
        textDecoration: 'none',
      },
      '.ms-Nav-compositeLink.is-selected &': {
        background: COLORS.BLUE2,
      },
    },
  },
  linkText: {
    color: COLORS.WHITE,
    fontSize: '0.95rem',
    fontFamily: FONTS.SEGOE_UI_REGULAR,
  },
};

const iconStyle = {
  color: COLORS.WHITE,
  margin: '0px 10px 0px 40px',
};

const navMenuLinks: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        iconProps: {
          iconName: 'ViewDashboard',
          style: iconStyle,
        },
        title: 'Dashboard',
      },
      {
        name: 'Users',
        url: '/users',
        iconProps: {
          iconName: 'People',
          style: iconStyle,
        },
        title: 'Users',
      },
      {
        name: 'Livestream',
        url: '/livestream',
        iconProps: {
          iconName: 'FrontCamera',
          style: iconStyle,
        },
        title: 'Livestream',
      },
      {
        name: 'Settings',
        url: '/settings',
        iconProps: {
          iconName: 'Settings',
          style: iconStyle,
        },
        title: 'Settings',
      },
    ],
  },
];

const Sidebar: React.FC = (): ReactElement => {
  const history = useHistory();

  const onNavClick = (event: any, element?: INavLink) => {
    event.preventDefault();
    history.push(element!.url);
  };

  const chatBot = () => {
    window.open(
      'https://quickpassbot.loca.lt/guest/conversations/production/7ec4566adfae48ffbd7dd0682e810b5f',
    );
  };

  return (
    <OuterSideBarWrapper>
      <MainItems>
        <NavMenu
          styles={navMenuLinksProps}
          groups={navMenuLinks}
          onLinkClick={onNavClick}
        />
      </MainItems>
      <ChatBotContainer>
        <ChatButton onClick={chatBot}>QuickPass BI Chatbot</ChatButton>
      </ChatBotContainer>
    </OuterSideBarWrapper>
  );
};

export default Sidebar;
