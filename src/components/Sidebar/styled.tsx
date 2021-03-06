import styled from 'styled-components';

import { Nav } from '@fluentui/react';

import { BREAK, COLORS } from '../../globalStyles';

export const OuterSideBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 240px;
  min-height: 92vh;
  z-index: 2;
  -webkit-box-shadow: 3px 0px 3px 0px ${COLORS.GREY_BOX_SHADOW};
  -moz-box-shadow: 3px 0px 3px 0px ${COLORS.GREY_BOX_SHADOW};
  box-shadow: 3px 0px 3px 0px ${COLORS.GREY_BOX_SHADOW};
  @media only screen and (max-width: ${BREAK.SM}px) {
    display: none;
  }
  color: white;
  background-color: ${COLORS.BLUE};
`;

export const MainItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavMenu = styled(Nav)`
  link: [ {
    color: white;
  }]
`;

export const ChatBotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 0 7px;
`;

export const ChatButton = styled.button`
  width: 80%;
  background-color: #096dd9;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  transition: ease background-color 250ms;
  cursor: pointer;
  padding: 5px 10px;
  &:hover {
    background-color: #add8e6;
  }
`;
