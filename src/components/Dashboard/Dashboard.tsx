import useInterval from '@use-it/interval';
import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  RecentUsers,
  TotalUsers,
  UsersGraph,
  HalfHourCount,
  DateTile,
  MaskPercTile,
} from '..';
import { updatePersonList } from '../../store/personList/actions';
import { PersonList } from '../../store/personList/types';
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ColumnContainer>
              <TotalUsers />
              <DateTile />
            </ColumnContainer>
            <br />
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

export { Dashboard };
