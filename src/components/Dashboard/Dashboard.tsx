import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import DateTile from './Tiles/Date';
import HalfHourCount from './Tiles/HalfHourCount';
import MaskPercTile from './Tiles/MaskChart';
import RecentUsers from './Tiles/RecentUsers';
import TotalUsers from './Tiles/TotalUsers';
import UsersGraph from './Tiles/UsersGraph';

import { updatePersonList } from '../../store/personList/actions';
import { PersonList } from '../../store/personList/types';

import useInterval from '@use-it/interval';

import { ColumnContainer, Display, LeftSide, TopHalf } from './styled';

const Dashboard = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/personlist`,
    );
    return data.json();
  };

  const getPersonList = useCallback(() => {
    const fetchPersonList = async () => {
      const resp = await fetchData();
      const newPersonListState: PersonList = {
        list: resp.personList,
        size: resp.personListSize,
      };
      dispatch(updatePersonList(newPersonListState));
    };

    fetchPersonList();
  }, [dispatch]);

  useEffect(() => {
    getPersonList();
  }, [getPersonList]);

  useInterval(() => {
    getPersonList();
  }, 2000);

  return (
    <Display>
      <LeftSide>
        <TopHalf>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <ColumnContainer>
              <TotalUsers />
              <DateTile />
            </ColumnContainer>
            <HalfHourCount />
          </div>
          <MaskPercTile />
        </TopHalf>
        <UsersGraph />
      </LeftSide>
      <RecentUsers />
    </Display>
  );
};

export default Dashboard;
