import styled from 'styled-components';

import { Nav } from '@fluentui/react';

import { BREAK, COLORS } from '../../globalStyles';

export const OuterSideBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 240px;
  min-height: 100%;
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
