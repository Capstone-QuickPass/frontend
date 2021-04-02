import React, { useEffect, useCallback, ReactElement } from 'react';

import { connect } from 'react-redux';
import { RootState } from '../../store';
import { setPage } from '../../store/page/actions';

import DateTile from './Tiles/Date';
import HalfHourCount from './Tiles/HalfHourCount';
import MaskPercTile from './Tiles/MaskChart';
import RecentUsers from './Tiles/RecentUsers';
import Capacity from './Tiles/Capacity';
import UsersGraph from './Tiles/UsersGraph';

import { updatePersonList } from '../../store/personList/actions';
import { person, PersonList } from '../../store/personList/types';

import { updateFacilityList } from '../../store/facilityList/actions';
import { FacilityList } from '../../store/facilityList/types';

import useInterval from '@use-it/interval';
import axios from 'axios';

import { ColumnContainer, Display, LeftSide, TopHalf } from './styled';
import { CircularProgress } from '@material-ui/core';

let initializedData: boolean = false;
interface DashboardProps {
  personList: person[];
  personListSize: number;
  setPage: (currentPageTitle: string, currentPage: string) => void;
  updatePersonList: (newPersonListState: PersonList) => void;
  updateFacilityList: (newFacilityListState: FacilityList) => void;
}

const mapStateToProps = (state: RootState) => {
  return {
    size: state.person.size,
    list: state.person.list,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPage: (currentPageTitle: string, currentPage: string) => {
      dispatch(setPage(currentPageTitle, currentPage));
    },
    updatePersonList: (newPersonListState: PersonList) => {
      dispatch(updatePersonList(newPersonListState));
    },
    updateFacilityList: (newFacilityListState: FacilityList) => {
      dispatch(updateFacilityList(newFacilityListState));
    },
  };
};

const Dashboard = (props: DashboardProps) => {
  useEffect(() => {
    props.setPage('Dashboard', '/dashboard');
  }, []);

  const fetchPersonData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/personlist`,
    );
    return res.data;
  };

  const fetchFacilityData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/facility/by/602ea8d423a00b4812b77ee6`,
    );
    return res.data;
  };

  const getPersonList = useCallback(() => {
    const fetchPersonList = async () => {
      const resp = await fetchPersonData();
      const newPersonListState: PersonList = {
        list: resp.personList,
        size: resp.personListSize,
      };
      props.updatePersonList(newPersonListState);
    };

    fetchPersonList();
  }, []);

  const getFacilityList = useCallback(() => {
    const fetchFacilityList = async () => {
      const resp = await fetchFacilityData();
      const newFacilityListState: FacilityList = {
        currentPopulation: resp.currentCapacity,
        capacity: resp.capacity,
      };
      props.updateFacilityList(newFacilityListState);
    };

    fetchFacilityList();
  }, []);

  useEffect(() => {
    getPersonList();
    getFacilityList();
    initializedData = true;
  }, [getPersonList, getFacilityList]);

  useInterval(() => {
    getPersonList();
    getFacilityList();
  }, 2000);

  return (
    <Display>
      <LeftSide>
        <TopHalf>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <ColumnContainer>
              <HalfHourCount />
              <Capacity />
            </ColumnContainer>
            <DateTile />
          </div>
          <MaskPercTile />
        </TopHalf>
        <UsersGraph />
      </LeftSide>
      <RecentUsers />
    </Display>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
