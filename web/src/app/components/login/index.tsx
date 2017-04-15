import * as React from 'react';
import {loginAction} from './login.actions';
import {Row, Col, PageHeader, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export class LoginComponent extends React.Component <any, any>{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }

    }

    login(username: string, password: string){
        let credentials = {
            username: username,
            password: password
        };

        loginAction(credentials).then(function(response){
            console.log(response);
        });
    }

    handleChange(key, event){
        this.setState({...this.state, [key]: event.target.value});
    }

    render(){

        return(
            <Row>
                <Col>
                    <PageHeader className="text-center">Login</PageHeader>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={12}>
                                <FormControl type="email" placeholder="Email" value={this.state.username} onChange={this.handleChange.bind(this,'email')}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this,'password')}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={10}>
                                <Button onClick={this.login.bind(this, this.state.username, this.state.password)}>
                                    Sign in
                                </Button>
                            </Col>
                            <Col sm={2}>
                                <a href="/signup"> Create an account.</a>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}