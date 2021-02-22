import React, { useEffect, useState } from 'react';

import useInterval from '@use-it/interval';
import { RootState } from '../../../../store';
import {
  Container,
  GridContainer,
  HeaderList,
  HeaderUl,
  Separator,
  UserContainer,
  UserTitle,
} from './styled';
import { person } from '../../../../store/personList/types';
import { FONTS } from '../../../../globalStyles';
import { connect } from 'react-redux';

const HeaderItems = ['User', 'Mask Status', 'Precision Score', 'Time'];

interface RecentUsersProps {
  list: person[];
}

const mapStateToProps = (state: RootState) => {
  return {
    size: state.person.size,
    list: state.person.list,
  };
};

const RecentUsers = (props: RecentUsersProps) => {
  const [user, setUser] = useState<person[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setUser(props.list);
    }, 100);
  }, []);

  useInterval(() => {
    setUser(props.list);
  }, 2100);

  return (
    <Container>
      <UserTitle>Recent Users</UserTitle>
      <Separator />
      <div style={{ marginTop: '0px' }}>
        <HeaderUl>
          {HeaderItems.map((item, index) => {
            return (
              <div key={index}>
                <HeaderList>{item}</HeaderList>
              </div>
            );
          })}
        </HeaderUl>
      </div>
      <Separator />
      <GridContainer>
        {user ? (
          <div>
            {user.map((member, index) => {
              return (
                <UserContainer key={index}>
                  <p style={{ fontFamily: FONTS.SEGOE_UI_REGULAR }}>
                    {member._id}
                  </p>
                  <p style={{ fontFamily: FONTS.SEGOE_UI_REGULAR }}>
                    {member.mask_status}
                  </p>
                  <p style={{ fontFamily: FONTS.SEGOE_UI_REGULAR }}>
                    {member.score}
                  </p>
                  <p style={{ fontFamily: FONTS.SEGOE_UI_REGULAR }}>
                    {member.time}
                  </p>
                </UserContainer>
              );
            })}
          </div>
        ) : (
          <React.Fragment />
        )}
      </GridContainer>
    </Container>
  );
};

export default connect(mapStateToProps)(RecentUsers);
