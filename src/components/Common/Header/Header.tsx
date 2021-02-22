import React, { ReactElement } from 'react';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../store';

import { Banner, HeaderButton, MobileBanner, Styledh1 } from './styled';
import { DirectionalHint, TooltipHost } from '@fluentui/react';

interface HeaderProps {
  headerTitle?: string;
}

const mapStateToProps = (state: RootState) => {
  return {
    headerTitle: state.page.currentPageTitle,
  };
};

const Header: React.FC<HeaderProps> = (props: HeaderProps): ReactElement => {
  const history = useHistory();

  return (
    <Banner>
      <MobileBanner>
        <Styledh1>QuickPass</Styledh1>
      </MobileBanner>
      <MobileBanner>
        <TooltipHost
          content="Help"
          directionalHint={DirectionalHint.bottomCenter}
        >
          <HeaderButton
            iconProps={{ iconName: 'Help' }}
            title="Help"
            ariaLabel="Help"
          />
        </TooltipHost>
        <TooltipHost
          content="Sign Out"
          directionalHint={DirectionalHint.bottomCenter}
        >
          <HeaderButton
            iconProps={{ iconName: 'SignOut' }}
            title="Sign Out"
            ariaLabel="Sign Out"
            onClick={() => {
              history.push('/');
            }}
          />
        </TooltipHost>
      </MobileBanner>
    </Banner>
  );
};

export default connect(mapStateToProps)(Header);
