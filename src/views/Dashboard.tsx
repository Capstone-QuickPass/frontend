import useInterval from '@use-it/interval';
import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  RecentUsers,
  TotalUsers,
  UsersGraph,
  NewUsersCount,
  DateTile,
  MaskPercTile,
} from '../components';
import { updatePersonList } from '../store/personList/actions';
import { PersonList } from '../store/personList/types';

const Display = styled.div`
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  max-height: 90vh;
  overflow: hidden;
  gap: 10px;
`;

const TopHalf = styled.div`
  display: inline-flex;
  gap: 10px;
  padding-bottom: 10px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Dashboard = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(`http://localhost:8080/personlist`);
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
          <ColumnContainer>
            <TotalUsers />
            <NewUsersCount />
          </ColumnContainer>
          <ColumnContainer>
            <DateTile />
          </ColumnContainer>
          <MaskPercTile />
        </TopHalf>
        <UsersGraph />
      </LeftSide>
      <RecentUsers />
    </Display>
  );
};

export { Dashboard };
