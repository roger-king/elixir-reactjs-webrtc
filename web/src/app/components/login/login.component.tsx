import * as React from 'react';
import {PropTypes} from 'react';
import {observer} from 'mobx-react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {LoginService} from './login.service';

@observer
export class LoginComponent extends React.Component<ILoginProps, any> {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    
    doLogin(){
        let Login = new LoginService()
        Login.login(this.props.username, this.props.password);
    }

    onChange(event){
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        const vm = this.props;

        return (
            <form onSubmit={this.doLogin}>
                <FormGroup>
                    <FormControl 
                        type="text" 
                        placeholder="User name" 
                        value={vm.name}
                        onChange={this.onChange}/>
                </FormGroup>
                <FormGroup>
                    <FormControl 
                        type="password" 
                        placeholder="Password" 
                        value={vm.password}
                        onChange={this.onChange}/>
                </FormGroup>

                <Button type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}