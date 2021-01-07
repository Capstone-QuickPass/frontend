import styled from 'styled-components';

import { IconButton } from '@fluentui/react';

import { BREAK, COLORS, FONTS } from '../../../globalStyles';

export const Banner = styled.header`
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100vw;
  max-height: 60px;
  align-items: center;
  padding: 8px 40px;
  z-index: 2;
  -webkit-box-shadow: 0px 4px 3px 0px ${COLORS.GREY_BOX_SHADOW};
  -moz-box-shadow: 0px 4px 3px 0px ${COLORS.GREY_BOX_SHADOW};
  box-shadow: 0px 4px 3px 0px ${COLORS.GREY_BOX_SHADOW};
  @media only screen and (max-width: ${BREAK.SM}px) {
    padding: 8px 24px;
  }
`;

export const MobileBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Styledh1 = styled.h1`
  letter-spacing: 0;
  opacity: 1;
  font-size: 1.875rem;
  font-family: ${FONTS.SEGOE_UI_SEMI_BOLD};
  margin-right: 16px;
  @media only screen and (max-width: ${BREAK.SM}px) {
    font-size: 1.125rem;
  }
`;

export const HeaderButton = styled(IconButton)`
  margin-left: 5px;
  margin-right: 5px;
`;
