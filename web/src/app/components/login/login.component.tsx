import * as React from 'react';
import {PropTypes} from 'react';
import {observer} from 'mobx-react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {LoginService} from './login.service';

@observer
export class LoginComponent extends React.Component<any, any> {
    constructor(props){
        super(props);

        this.state = { 
            username: '',
            password: ''
        }
        this.doLogin = this.doLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }
    
    doLogin(){
        let Login = new LoginService()
        Login.login(this.state.username, this.state.password);
    }

    setUsername(event){
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }

    render() {
        const state = this.state;
        return (
            <div>
                <FormGroup>
                    <FormControl 
                        type="text" 
                        placeholder="User name" 
                        value={state.username}
                        onChange={this.setUsername}/>
                </FormGroup>
                <FormGroup>
                    <FormControl 
                        type="password" 
                        placeholder="Password" 
                        value={state.password}
                        onChange={this.setPassword}/>
                </FormGroup>

                <Button type="submit" onClick={this.doLogin}>
                    Submit
                </Button>
            </div>
        );
    }
}