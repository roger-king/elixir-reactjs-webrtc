"use strict";
import * as React from 'react';
import { connect } from 'react-redux';
//import { asyncConnect } from 'redux-connect';
import {ActionCreator} from "redux";
import {doLogin} from './login.reducer';
import {ILogin, ILoginAction} from "./login.model";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

interface IProps {
    credentials: ILogin,
    doLogin: ActionCreator<ILoginAction>
}

export class LoginComponent extends React.Component<IProps, {}>{
    private handleLogin(username: string, password: string){
        const doLogin = this.props.doLogin;

        const credentials = {
            username: username,
            password: password
        };

        doLogin(credentials);
    }

    public render(){
        const credentials = this.props.credentials;
        return(
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        User Name
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="User Name" {...credentials.username}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" {...credentials.password}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" onClick={this.handleLogin.bind(this, credentials.username, credentials.password)}>
                            Sign in
                        </Button>
                        <a href=""> Create an account.</a>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}