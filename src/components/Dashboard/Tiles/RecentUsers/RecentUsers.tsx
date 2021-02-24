import React, { useEffect, useState } from 'react';

import useInterval from '@use-it/interval';
import { RootState } from '../../../../store';
import { Container } from './styled';
import { person } from '../../../../store/personList/types';
import { FONTS } from '../../../../globalStyles';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
interface RecentUsersProps {
  list: person[];
}

const mapStateToProps = (state: RootState) => {
  return {
    size: state.person.size,
    list: state.person.list,
  };
};

const columns = [
  { field: 'id', headerName: 'User ID', width: 225 },
  { field: 'mask_status', headerName: 'Mask Status', width: 150 },
  { field: 'time', headerName: 'Time' },
  { field: 'score', headerName: 'Precision Score', width: 175 },
];

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
      <DataGrid rows={user} columns={columns} loading={user.length === 0} />
    </Container>
  );
};

export default connect(mapStateToProps)(RecentUsers);
