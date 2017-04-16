import * as React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {Row, Col, PageHeader, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import './login.scss';

interface ILoginProps {
    onSubmit: () => void,
    handleSubmit?: () => void,
    submitting: boolean,
    hasError: boolean,
    fields?: {
        email: any,
        password: any
    }
}

class LoginComponent extends React.Component <ILoginProps, void> {
    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit, submitting}= this.props;
        return (
            <Row>
                <Col>
                    <PageHeader className="text-center">Login</PageHeader>
                    <Form onSubmit={ handleSubmit }>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={12}>
                                <Field name="email" component={FormControl} type="email" placeholder="Email"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={12}>
                                <Field name="password" type="password" placeholder="Password" component={FormControl}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={6}>
                                <Button disabled={submitting} type="submit">
                                        Sign in
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Link to="/signup" className="btn btn-block btn-secondary"> Create an account.</Link>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }

    static validate(values) {
        const errors = {email: '', password: ''};

        if (!values.username) {
            errors.email = 'Username is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors
    }
}

export let LoginForm = reduxForm({
    form: 'login',
    validate: LoginComponent.validate
})(LoginComponent);