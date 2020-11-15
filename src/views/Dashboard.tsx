import useInterval from '@use-it/interval';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  RecentUsers,
  TotalUsers,
  UsersGraph,
  NewUsersCount,
} from '../components';
import { updatePersonList } from '../store/personList/actions';
import { PersonList } from '../store/personList/types';

const Display = styled.div`
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  max-height: 90vh;
  gap: 10px;
`;

const TopHalf = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const LeftTopTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPersonList();
  }, []);

  useInterval(() => {
    getPersonList();
  }, 2000);

  const getPersonList = async () => {
    const resp = await fetchData();
    const newPersonListState: PersonList = {
      list: resp.personList,
      size: resp.personListSize,
    };
    dispatch(updatePersonList(newPersonListState));
  };

  const fetchData = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/personlist`,
    );
    return data.json();
  };

  return (
    <Display>
      <TopHalf>
        <LeftTopTile>
          <TotalUsers />
          <NewUsersCount />
        </LeftTopTile>
        <RecentUsers />
      </TopHalf>
      <UsersGraph />
    </Display>
  );
};

export { Dashboard };
