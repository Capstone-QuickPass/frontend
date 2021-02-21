import React, { useEffect, useCallback, ReactElement } from 'react';

import { connect } from 'react-redux';
import { RootState } from '../../store';
import { setPage } from '../../store/page/actions';

import DateTile from './Tiles/Date';
import HalfHourCount from './Tiles/HalfHourCount';
import MaskPercTile from './Tiles/MaskChart';
import RecentUsers from './Tiles/RecentUsers';
import TotalUsers from './Tiles/TotalUsers';
import UsersGraph from './Tiles/UsersGraph';

import { updatePersonList } from '../../store/personList/actions';
import { person, PersonList } from '../../store/personList/types';

import { updateFacilityList } from '../../store/facilityList/actions';
import { facility, FacilityList } from '../../store/facilityList/types';

import useInterval from '@use-it/interval';

import { ColumnContainer, Display, LeftSide, TopHalf } from './styled';

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

const Dashboard: React.FC<DashboardProps> = (
  props: DashboardProps,
): ReactElement => {
  useEffect(() => {
    props.setPage('Dashboard', '/dashboard');
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/personlist`,
    );
    return data.json();
  };

  const fetchData2 = async () => {
    const items = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/facility/by/602ea8d423a00b4812b77ee6`,
    );
    return items.json();
  };

  const getPersonList = useCallback(() => {
    const fetchPersonList = async () => {
      const resp = await fetchData();
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
      const resp = await fetchData2();
      const newFacilityListState: FacilityList = {
        cap: resp.currentCapacity,
        size: resp.capacity,
      };
      console.log(newFacilityListState);
      props.updateFacilityList(newFacilityListState);
    };

    fetchFacilityList();
  }, []);

  useEffect(() => {
    getPersonList();
    getFacilityList();
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
              <TotalUsers />
              <DateTile />
            </ColumnContainer>
            <HalfHourCount />
          </div>
          <MaskPercTile />
        </TopHalf>
        <UsersGraph />
      </LeftSide>
      <RecentUsers list={props.personList} />
    </Display>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
