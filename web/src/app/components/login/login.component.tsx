"use strict";
import * as React from 'react';
/*import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from './login.action';*/

import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

interface LoginProps {
    username: string,
    password: string
}

/*interface DispatchProps{
    login(username: string, password: string)
}

type LoginProps = StateProps & DispatchProps;

function mapStateToProps(state){
    return{
        username: state.login.username,
        password: state.login.password
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(LoginActions, dispatch);
}

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)*/
export class LoginComponent extends React.Component<any, any>{
    constructor(props: LoginProps){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin(username: string, password: string, e: any){
        console.log('username: ', username);
        console.log('password: ', password);
    }
    setUsername(event: any){
        this.setState({valid: true, username: event.target.value});
    }
    setPassword(event: any){
        this.setState({valid: true, password: event.target.value});
    }

    render(){
        return(
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        User Name
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="User Name" onChange={this.setUsername.bind(this)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" onChange={this.setPassword.bind(this)}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" onClick={this.handleLogin.bind(this, this.state.username, this.state.password)}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}