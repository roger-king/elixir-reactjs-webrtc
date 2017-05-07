import * as React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export class LoginContainer extends React.Component <any, any> {
    render(){
        return(
            <div className="login-container">
                <form>
                    <FormGroup>
                        <FormControl type="text" placeholder="User name"/>
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="password" placeholder="Password"/>
                    </FormGroup>

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}