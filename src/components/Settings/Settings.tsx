import React from 'react';
import { Card, CardContent, TextField, Button } from '@material-ui/core';
import { SettingSection, Display } from './styled';
import { Formik, Form } from 'formik';
import axios from 'axios';
import { RootState } from '../../store';
import { connect } from 'react-redux';

interface CurrentCapacity {
  maxCapacity: number;
  currentPopulation: number;
}

const mapStateToProps = (state: RootState) => {
  return {
    maxCapacity: state.facility.capacity,
    currentPopulation: state.facility.currentPopulation,
  };
};

const Settings = (props: CurrentCapacity) => {
  return (
    <SettingSection>
      <Display>
        <h1>Settings</h1>
        <Card>
          <CardContent>
            <h2>Facility Information</h2>
            <Formik
              initialValues={{ capacity: props.maxCapacity }}
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

export default connect(mapStateToProps)(Settings);
