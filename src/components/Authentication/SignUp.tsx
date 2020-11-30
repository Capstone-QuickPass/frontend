import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import AuthStore from './authStore';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { textAlign: 'center' },
    successMessage: { color: 'green' },
    errorMessage: { color: 'red' },
  }),
);

const Container = styled.div`
  max-width: 450px;
  display: block;
  margin: 0 auto;
`;

const SignUpField = styled(TextField)`
  width: 100%;
  margin: 1% 0;
`;

const SignUpSelect = styled(Select)`
  width: 100%;
  margin: 2% 0;
`;

const SubmitButtonGrid = styled(Grid)`
  padding-top: 2%;
`;

interface ISignUpForm {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
  facility: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Signed up successfully.',
    type: 'success',
  },
  duplicate: {
    message: 'Email-id already exist. Please use different email-id.',
    type: 'error',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
};

interface SignUpProps {
  isSignUpSuccess: boolean;
}

const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  const classes = useStyles();
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  });

  const history = useHistory();

  const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
    try {
      //CHECK HERE
      if (data) {
        AuthStore.set(data.email, data.password);
        console.log(AuthStore);
        setFormStatus(formStatusProps.success);
        resetForm({});
      }
    } catch (error) {
      const response = error.response;
      if (response.data === 'user already exist' && response.status === 400) {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{
          fullName: '',
          password: '',
          confirmPassword: '',
          email: '',
          facility: '',
        }}
        onSubmit={(values: ISignUpForm, actions) => {
          createNewUser(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Enter a valid email'),
          fullName: Yup.string().required('Enter full name'),
          password: Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
            .required('Should contain atleast one letter and one number.'),
          confirmPassword: Yup.string()
            .required('Required')
            .test('password-match', 'Passwords do not match', function (value) {
              return this.parent.password === value;
            }),
          facility: Yup.string().required('Select a facility'),
        })}
      >
        {(props: FormikProps<ISignUpForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;
          return (
            <Form>
              <h1 className={classes.title}>Sign up</h1>
              <Grid container justify="space-around" direction="row">
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <SignUpField
                    name="fullName"
                    id="fullName"
                    label="Full Name"
                    value={values.fullName}
                    type="text"
                    helperText={
                      errors.fullName && touched.fullName
                        ? errors.fullName
                        : 'Enter your full name.'
                    }
                    error={errors.fullName && touched.fullName ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <SignUpField
                    name="email"
                    id="email"
                    label="Email"
                    value={values.email}
                    type="email"
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : 'Enter email-id'
                    }
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <SignUpField
                    name="password"
                    id="password"
                    label="Password"
                    value={values.password}
                    type="password"
                    helperText={
                      errors.password && touched.password
                        ? 'Should contain atleast one letter and one number'
                        : 'Enter a password'
                    }
                    error={errors.password && touched.password ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <SignUpField
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm password"
                    value={values.confirmPassword}
                    type="password"
                    helperText={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : 'Re-Enter your password'
                    }
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? true
                        : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <SignUpSelect
                    name="facility"
                    id="facility"
                    label="Facility"
                    value={values.facility}
                    type="email"
                    error={errors.facility && touched.facility ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={0}>1 a street</MenuItem>
                    <MenuItem value={1}>2 b street</MenuItem>
                    <MenuItem value={2}>3 b street</MenuItem>
                  </SignUpSelect>
                  <FormHelperText>Select a Facility</FormHelperText>
                </Grid>
                <SubmitButtonGrid item lg={10} md={10} sm={10} xs={10}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                    onClick={() => history.push('/')}
                  >
                    Submit
                  </Button>
                  {displayFormStatus && (
                    <div className="formStatus">
                      {formStatus.type === 'error' ? (
                        <p className={classes.errorMessage}>
                          {formStatus.message}
                        </p>
                      ) : formStatus.type === 'success' ? (
                        <p className={classes.successMessage}>
                          {formStatus.message}
                        </p>
                      ) : null}
                    </div>
                  )}
                </SubmitButtonGrid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default SignUp;
