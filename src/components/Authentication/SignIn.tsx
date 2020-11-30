import React, {useState} from 'react'
import {
    Grid,
    TextField,
    Button,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import AuthStore from './authStore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        submitButton: {
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        title: {textAlign: 'center'},
        successMessage: {color: 'green'},
        errorMessage: {color: 'red'},
    })
)

const Container = styled.div`
  max-width: 450px;
  display: block;
  margin: 0 auto;
`;

const SignInField = styled(TextField)`
  width: 100%;
  margin: 1% 0;
`;

const SignInSubmit = styled(Grid)`
    padding-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

interface ISignInForm {
    email: string
    password: string
}

interface IFormStatus {
    message: string
    type: string
}

interface IFormStatusProps {
    [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Signed In successfully.',
        type: 'success',
    },
    error: {
        message: 'Email and/or Password do not match.',
        type: 'error',
    },
}

const SignIn: React.FunctionComponent = () => {
    const classes = useStyles()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const history = useHistory();

    const validateLogin = async (data: ISignInForm, resetForm: Function) => {
        try {
            // CHECK HERE
            if (data) {
                const storePass = AuthStore.get(data.email);
                if (storePass && data.password === storePass) {
                    setFormStatus(formStatusProps.success)
                    resetForm({})
                }
            }
        } catch (error) {
            setFormStatus(formStatusProps.error)
        } finally {
            setDisplayFormStatus(true)
        }
    }

    return (
        <Container>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values: ISignInForm, actions) => {
                    validateLogin(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required('Enter a valid email'),
                    password: Yup.string()
                        .required(
                            ''
                        ),
                })}
            >
                {(props: FormikProps<ISignInForm>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                    } = props
                    return (
                        <Form>
                            <h1 className={classes.title}>Login</h1>
                            <Grid
                                container
                                justify="space-around"
                                direction="row"
                            >
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}

                                >
                                    <SignInField
                                        name="email"
                                        id="email"
                                        label="Email"
                                        value={values.email}
                                        type="email"
                                        helperText={
                                            errors.email
                                        }
                                        error={
                                            errors.email && touched.email
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                >
                                    <SignInField
                                        name="password"
                                        id="password"
                                        label="Password"
                                        value={values.password}
                                        type="password"
                                        error={
                                            errors.password && touched.password
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <SignInSubmit
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                >
                                    <div>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            disabled={isSubmitting}
                                            onClick={() => {history.push("/dashboard")}}
                                        >
                                            Submit
                                        </Button>
                                        {displayFormStatus && (
                                            <div className="formStatus">
                                                {formStatus.type === 'error' ? (
                                                    <p
                                                        className={
                                                            classes.errorMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : formStatus.type ===
                                                'success' ? (
                                                    <p
                                                        className={
                                                            classes.successMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : null}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <Link to="/signup">Sign Up</Link>
                                    </div>
                                </SignInSubmit>
                            </Grid>
                        </Form>
                    )
                }}
            </Formik>
        </Container>
    )
}

export default SignIn;