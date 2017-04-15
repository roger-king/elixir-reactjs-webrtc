import * as React from "react";
import {SignUpAction} from "./signup.actions";
import {Button, Col, Form, FormControl, FormGroup, PageHeader} from "react-bootstrap";

export class SignupComponent extends React.Component<any, any>{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }
    create(){
        let user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };

        console.log('Created new :', user);
        SignUpAction(user).then(function(response){
            console.log(response);
        });
    }

    handleChange(key, event){
        this.setState({...this.state, [key]: event.target.value});
    }

    render(){
        return(
          <Col>
              <PageHeader>Create an account</PageHeader>
              <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                      <Col sm={12}>
                          <FormControl type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this, "email")}/>
                      </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                      <Col sm={12}>
                          <FormControl type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange.bind(this, "username")}/>
                      </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                      <Col sm={12}>
                          <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this, "password")}/>
                      </Col>
                  </FormGroup>

                  <FormGroup>
                      <Col sm={12}>
                          <Button onClick={this.create.bind(this)}>
                              Create
                          </Button>
                      </Col>
                  </FormGroup>
              </Form>
          </Col>
        );
    }
}