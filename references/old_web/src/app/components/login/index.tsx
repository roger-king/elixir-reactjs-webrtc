"use strict";
import * as React from 'react';
import { connect } from 'react-redux';
import {ActionCreator , bindActionCreators} from "redux";
import {doLogin} from './login.reducer';
import {ILogin, ILoginAction} from "./login.model";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

interface LoginState {
    username: string,
    password: string
}

export class LoginComponent extends React.Component<any, LoginState>{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
    login(username: string, password: string){
        alert(username + ":" + password);
    }

    setUsername(event){
        this.setUsername({valid: true, username: event.target.value});
    }

    setPassword(event){
        this.setUsername({valid: true, password: event.target.value});
    }

    public render(){
        return(
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        User Name
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="User Name" defaultValue={this.state.username} onChange={this.setUsername.bind(this)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" defaultValue={this.state.password} onChange={this.setPassword.bind(this)}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" onClick={this.login.bind(this.state.username, this.state.password)}>
                            Sign in
                        </Button>
                        <a href=""> Create an account.</a>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}