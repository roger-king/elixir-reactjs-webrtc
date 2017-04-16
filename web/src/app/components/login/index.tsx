import * as React from 'react';
import { reduxForm } from 'redux-form';
import {User} from './../../actions';
import {loginAction} from './login.actions';
import {ILoginProps} from './login.interface';
import {Row, Col, PageHeader, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export class LoginComponent extends React.Component <any, any>{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    login(email: string, password: string){
        let credentials = {
            email: email,
            password: password
        };
        let user = new User();

        loginAction(credentials)
            .then(function success(response){
                console.log('success', response);
                window.location.href = '/';
            },function handleError(response){
                console.log('error', response);
            });
    }

    handleChange(key, event){
        this.setState({...this.state, [key]: event.target.value});
    }

    render(){
        const { handleSubmit, submitting} = this.props;
        return(
            <Row>
                <Col>
                    <PageHeader className="text-center">Login</PageHeader>
                    <Form
                        horizontal
                    >
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={12}>
                                <FormControl type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange.bind(this,'email')}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange.bind(this,'password')}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={6}>
                                <Button disabled={submitting} onClick={this.login.bind(this, this.state.email, this.state.password)}>
                                    Sign in
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <a href="/signup" className="btn btn-block btn-secondary"> Create an account.</a>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}