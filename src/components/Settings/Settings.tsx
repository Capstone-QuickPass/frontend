import React, { useCallback, useEffect } from 'react';
import { Card, CardContent, TextField, Button } from '@material-ui/core';
import { SettingSection, Display, Form } from './styled';
import { Formik } from 'formik';
import axios from 'axios';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { FacilityList } from '../../store/facilityList/types';
import { updateFacilityList } from '../../store/facilityList/actions';

interface SettingsProps {
  maxCapacity: number;
  updateFacilityList: (newFacilityListState: FacilityList) => void;
}

const mapStateToProps = (state: RootState) => {
  return {
    maxCapacity: state.facility.capacity,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateFacilityList: (newFacilityListState: FacilityList) => {
      dispatch(updateFacilityList(newFacilityListState));
    },
  };
};

const Settings = (props: SettingsProps) => {
  const fetchFacilityData = async () => {
    const items = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/facility/by/602ea8d423a00b4812b77ee6`,
    );
    return items.data;
  };

  const getFacility = useCallback(() => {
    const fetchFacilityList = async () => {
      const resp = await fetchFacilityData();
      const newFacilityListState: FacilityList = {
        currentPopulation: resp.currentCapacity,
        capacity: resp.capacity,
      };
      props.updateFacilityList(newFacilityListState);
    };

    fetchFacilityList();
  }, [props]);

  useEffect(() => {
    getFacility();
  }, [getFacility]);

  return (
    <SettingSection>
      <Display>
        <h1>Settings</h1>
        <Card>
          <CardContent>
            <h2>Facility</h2>
            <Formik
              initialValues={{ capacity: props.maxCapacity }}
              enableReinitialize={true}
              onSubmit={async (data) => {
                await axios.patch(
                  `${process.env.REACT_APP_API_BASE_URL}/facility/by/602ea8d423a00b4812b77ee6`,
                  data,
                );
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <TextField
                    InputProps={{
                      inputProps: { min: 1 },
                    }}
                    onChange={props.handleChange}
                    label="Capacity"
                    type="number"
                    variant="outlined"
                    value={props.values.capacity}
                    name="capacity"
                  />
                  <br />
                  <Button type="submit" variant="contained" color="primary">
                    Update facility
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Display>
    </SettingSection>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
