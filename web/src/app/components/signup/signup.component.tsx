import * as React from 'react';
import { PropTypes } from 'react';
import { observer } from 'mobx-react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { ISignupProps } from './signup.interface';

@observer
export class SignupComponent extends React.Component<ISignupProps, any>{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            duplicatePassword: '',
            pwIsSame: '',
            isComplete: false
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.comparePasswords = this.comparePasswords.bind(this);
    }

    setEmail(event) {
        this.setState({ email: event.target.value });
    }

    setPassword(event) {
        this.setState({ password: event.target.value });
    }

    setUsername(event) {
        this.setState({ username: event.target.value });
    }

    comparePasswords(event) {
        let state = this.state;
        this.setState({duplicatePassword: event.target.value});
        if (state.password === state.duplicatePassword) {
            state.pwIsSame = true;
            state.isComplete = true;
        } else {
            state.pwIsSame = false;
        }
    }

    doCreate() {

    }

    render() {
        const state = this.state;
        let msg: any = '';
        if (!state.pwIsSame) {
            msg = <h4>Passwords do not match.</h4>
        }
        return (
            <div>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Username"
                        value={state.username}
                        onChange={this.setUsername} />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Email"
                        value={state.email}
                        onChange={this.setEmail} />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={this.setPassword} />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Password again."
                        value={state.duplicatePassword}
                        onChange={this.comparePasswords} />
                </FormGroup>
                {msg}
                <Button type="submit" onClick={this.doCreate} disabled={state.isComplete}>
                    Submit
                </Button>
            </div>
        );
    }
}
